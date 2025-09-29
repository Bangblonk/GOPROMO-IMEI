module.exports = {
  apps: [{
    name: 'gpromo-imei-9000',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 9000
    },
    error_file: './logs/err-9000.log',
    out_file: './logs/out-9000.log',
    log_file: './logs/combined-9000.log',
    time: true
  }]
};
