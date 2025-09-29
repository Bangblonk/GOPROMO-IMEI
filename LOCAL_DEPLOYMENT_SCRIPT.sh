#!/bin/bash

# GOPROMO-IMEI Local Deployment Script
# Run this script on your local machine to complete the deployment

echo "🚀 GOPROMO-IMEI Deployment Script"
echo "=================================="

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Run linting
echo "🔍 Running linting..."
npm run lint

# Step 4: Build the application
echo "🏗️  Building application..."
npm run build

# Step 5: Test the application locally
echo "🧪 Testing application locally..."
echo "Starting local server... (Press Ctrl+C to stop)"
npm run dev &
LOCAL_PID=$!

# Wait a few seconds for server to start
sleep 5

# Test if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Local server is running successfully!"
    echo "🌐 Open http://localhost:3000 in your browser to test"
else
    echo "❌ Local server failed to start"
    kill $LOCAL_PID 2>/dev/null
    exit 1
fi

# Wait for user to test
echo ""
echo "🔍 Please test the application locally:"
echo "   - Open http://localhost:3000"
echo "   - Check all pages work correctly"
echo "   - Test the shopping cart functionality"
echo "   - Test the checkout form"
echo ""
read -p "Press Enter when you're done testing..."

# Stop local server
kill $LOCAL_PID 2>/dev/null
echo "✅ Local testing completed!"

# Step 6: Git Setup
echo ""
echo "📋 Git Setup Instructions:"
echo "========================="
echo "1. Make sure you have a GitHub repository created:"
echo "   https://github.com/Bangblonk/GOPROMO-IMEI"
echo ""
echo "2. If you haven't already, run these commands:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit - GOPROMO-IMEI ready for deployment'"
echo ""
echo "3. Add remote repository:"
echo "   git remote add origin https://github.com/Bangblonk/GOPROMO-IMEI.git"
echo ""
echo "4. Push to GitHub (you'll need to authenticate):"
echo "   git push -u origin main"
echo ""

# Step 7: Deployment Options
echo "🚀 Deployment Options:"
echo "======================"
echo ""
echo "Option 1: Vercel (Recommended - Easiest)"
echo "----------------------------------------"
echo "1. Go to https://vercel.com"
echo "2. Sign up with GitHub"
echo "3. Click 'New Project'"
echo "4. Select 'GOPROMO-IMEI' repository"
echo "5. Click 'Deploy'"
echo "6. Wait 2-3 minutes and your app will be live!"
echo ""
echo "Option 2: Netlify (Alternative)"
echo "--------------------------------"
echo "1. Go to https://netlify.com"
echo "2. Sign up with GitHub"
echo "3. Click 'New site from Git'"
echo "4. Select 'GOPROMO-IMEI' repository"
echo "5. Configure:"
echo "   - Build command: npm run build"
echo "   - Publish directory: .next"
echo "6. Click 'Deploy site'"
echo ""
echo "Option 3: Railway (Modern Deployment)"
echo "-------------------------------------"
echo "1. Go to https://railway.app"
echo "2. Sign up with GitHub"
echo "3. Click 'Deploy from GitHub repo'"
echo "4. Select 'GOPROMO-IMEI' repository"
echo "5. Click 'Deploy'"
echo ""
echo "Option 4: Manual Upload (No Git Required)"
echo "----------------------------------------"
echo "1. Create a zip file of your project:"
echo "   zip -r gpromo-imei.zip ."
echo "2. Go to https://vercel.com"
echo "3. Click 'New Project' → 'Upload'"
echo "4. Upload the zip file"
echo "5. Wait for deployment to complete"
echo ""

# Step 8: Final Instructions
echo "🎯 Final Steps:"
echo "==============="
echo ""
echo "1. ✅ Test locally (npm run dev)"
echo "2. ✅ Push to GitHub"
echo "3. ✅ Deploy to your chosen platform"
echo "4. ✅ Test your live application"
echo "5. ✅ Set up custom domain (optional)"
echo ""
echo "📚 Documentation:"
echo "- DEPLOYMENT.md - Complete deployment guide"
echo "- VERCEL_DEPLOYMENT.md - Vercel-specific guide"
echo ""
echo "🎉 Your GOPROMO-IMEI application is ready for deployment!"
echo ""

# Ask user what they want to do next
echo "What would you like to do next?"
echo "1) Test locally again"
echo "2) View deployment guides"
echo "3) Exit"
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🔄 Starting local server..."
        npm run dev
        ;;
    2)
        echo "📖 Opening deployment guides..."
        if command -v xdg-open &> /dev/null; then
            xdg-open DEPLOYMENT.md
        elif command -v open &> /dev/null; then
            open DEPLOYMENT.md
        else
            echo "Please open DEPLOYMENT.md and VERCEL_DEPLOYMENT.md manually"
        fi
        ;;
    3)
        echo "👋 Good luck with your deployment!"
        ;;
    *)
        echo "Invalid choice. Exiting..."
        ;;
esac