module.exports = {
  apps: [{
    name: 'gpromo-imei-8080',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 8080
    },
    error_file: './logs/err-8080.log',
    out_file: './logs/out-8080.log',
    log_file: './logs/combined-8080.log',
    time: true
  }]
};