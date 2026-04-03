module.exports = {
  apps: [
    {
      name: "hanuman-app",
      script: "server.js",
      cwd: "/var/www/hanuman-app",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
