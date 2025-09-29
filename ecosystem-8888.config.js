module.exports = {
  apps: [{
    name: 'gpromo-imei-8888',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 8888
    },
    error_file: './logs/err-8888.log',
    out_file: './logs/out-8888.log',
    log_file: './logs/combined-8888.log',
    time: true
  }]
};
