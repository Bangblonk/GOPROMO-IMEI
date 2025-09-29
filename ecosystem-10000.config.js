module.exports = {
  apps: [{
    name: 'gpromo-imei-10000',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 10000
    },
    error_file: './logs/err-10000.log',
    out_file: './logs/out-10000.log',
    log_file: './logs/combined-10000.log',
    time: true
  }]
};
