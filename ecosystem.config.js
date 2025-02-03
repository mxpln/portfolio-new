module.exports = {
    apps: [
      {
        name: 'your-app-name',
        script: 'npm',
        args: 'start',
        instances: 'max',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };