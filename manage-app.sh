#!/bin/bash

# GOPROMO-IMEI Application Management Script
# This script helps manage the application deployment

echo "🚀 GOPROMO-IMEI Application Manager"
echo "=================================="

# Function to show status
show_status() {
    echo "📊 Application Status:"
    ./node_modules/.bin/pm2 status
    echo ""
    echo "🌐 Server Information:"
    echo "   Local IP: $(hostname -I | awk '{print $1}')"
    echo "   Public IP: $(curl -s ifconfig.me 2>/dev/null || echo 'Unable to get public IP')"
    echo ""
    echo "🔍 Port Check:"
    echo "   Port 3000: $(netstat -tlnp 2>/dev/null | grep :3000 | wc -l) processes"
    echo "   Port 8080: $(netstat -tlnp 2>/dev/null | grep :8080 | wc -l) processes"
    echo ""
}

# Function to start application
start_app() {
    local port=${1:-8080}
    echo "🚀 Starting application on port $port..."
    
    # Stop existing instances
    ./node_modules/.bin/pm2 stop all
    
    # Create ecosystem config for specified port
    cat > ecosystem-$port.config.js << EOF
module.exports = {
  apps: [{
    name: 'gpromo-imei-$port',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: $port
    },
    error_file: './logs/err-$port.log',
    out_file: './logs/out-$port.log',
    log_file: './logs/combined-$port.log',
    time: true
  }]
};
EOF
    
    # Start application
    ./node_modules/.bin/pm2 start ecosystem-$port.config.js
    
    # Wait and show status
    sleep 3
    echo "✅ Application started on port $port"
    echo "🔗 Local access: http://localhost:$port"
    echo "🌐 Public access: http://$(curl -s ifconfig.me 2>/dev/null || echo 'your-server-ip'):$port"
    echo ""
}

# Function to stop application
stop_app() {
    echo "🛑 Stopping application..."
    ./node_modules/.bin/pm2 stop all
    echo "✅ Application stopped"
}

# Function to restart application
restart_app() {
    local port=${1:-8080}
    echo "🔄 Restarting application on port $port..."
    stop_app
    sleep 2
    start_app $port
}

# Function to show logs
show_logs() {
    echo "📋 Application Logs:"
    ./node_modules/.bin/pm2 logs
}

# Function to test application
test_app() {
    local port=${1:-8080}
    echo "🧪 Testing application on port $port..."
    
    # Test local access
    if curl -s http://localhost:$port > /dev/null; then
        echo "✅ Local access: SUCCESS"
        echo "   Title: $(curl -s http://localhost:$port | grep -o '<title>.*</title>' | sed 's/<title>//;s/<\/title>//')"
    else
        echo "❌ Local access: FAILED"
    fi
    
    # Test external access
    local public_ip=$(curl -s ifconfig.me 2>/dev/null)
    if [ ! -z "$public_ip" ]; then
        if curl -s http://$public_ip:$port > /dev/null; then
            echo "✅ External access: SUCCESS"
            echo "   URL: http://$public_ip:$port"
        else
            echo "❌ External access: FAILED (port may be blocked by firewall)"
        fi
    fi
    
    echo ""
}

# Function to setup different ports
setup_ports() {
    echo "🔧 Testing different ports..."
    
    for port in 3000 8080 8888 9000 10000; do
        echo "Testing port $port..."
        
        # Check if port is available
        if netstat -tlnp 2>/dev/null | grep -q ":$port "; then
            echo "❌ Port $port is already in use"
            continue
        fi
        
        # Start application on this port
        start_app $port
        
        # Test access
        sleep 2
        test_app $port
        
        # Stop application
        stop_app
        sleep 1
        
        echo "---"
    done
}

# Main menu
case "${1:-status}" in
    "status")
        show_status
        ;;
    "start")
        start_app ${2:-8080}
        ;;
    "stop")
        stop_app
        ;;
    "restart")
        restart_app ${2:-8080}
        ;;
    "logs")
        show_logs
        ;;
    "test")
        test_app ${2:-8080}
        ;;
    "setup")
        setup_ports
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command] [port]"
        echo ""
        echo "Commands:"
        echo "  status     - Show application status"
        echo "  start [port] - Start application (default: 8080)"
        echo "  stop       - Stop application"
        echo "  restart [port] - Restart application (default: 8080)"
        echo "  logs       - Show application logs"
        echo "  test [port] - Test application access (default: 8080)"
        echo "  setup      - Test different ports automatically"
        echo "  help       - Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0 status"
        echo "  $0 start 8080"
        echo "  $0 test 8080"
        echo "  $0 setup"
        ;;
    *)
        echo "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac