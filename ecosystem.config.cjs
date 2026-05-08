try {
  require("dotenv").config();
} catch {
  // dotenv is optional in standalone deployments; hosting/PM2 can provide env vars.
}

module.exports = {
  apps: [
    {
      name: "hanuman-app",
      script: ".next/standalone/server.js",
      cwd: "/var/www/hanuman-app",
      env: {
        NODE_ENV: "production",
        HOSTNAME: process.env.HOSTNAME || "0.0.0.0",
        PORT: process.env.PORT || "3000",
      },
    },
  ],
};
