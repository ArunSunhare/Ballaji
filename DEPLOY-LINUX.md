# Linux Deployment Guide

This project is a Next.js app with server-side API routes, so do not upload only static HTML files.

## Recommended deployment

Build the app with standalone output, then upload these items to your Linux server:

- `.next/standalone/`
- `.next/static/`
- `public/`
- `ecosystem.config.cjs`

## 1. Build locally or on the server

```bash
npm install
npm run build
```

After the build, Next.js will create:

- `.next/standalone/server.js`
- `.next/static/`

## 2. Copy files to Linux server

Example:

```bash
scp -r .next/standalone user@your-server:/var/www/hanuman-app/
scp -r .next/static user@your-server:/var/www/hanuman-app/.next/
scp -r public user@your-server:/var/www/hanuman-app/
scp ecosystem.config.cjs user@your-server:/var/www/hanuman-app/
```

Your final server folder should look like this:

```text
/var/www/hanuman-app
├── .next/
│   └── static/
├── ecosystem.config.cjs
├── public/
└── server.js
```

`server.js` comes from `.next/standalone/server.js`.

## 3. Install Node.js on Linux

Use Node.js 20 or newer.

Check version:

```bash
node -v
```

## 4. Run the app

Inside `/var/www/hanuman-app`:

```bash
PORT=3000 HOSTNAME=0.0.0.0 node server.js
```

Now open:

```text
http://your-server-ip:3000
```

## 5. Keep it running with PM2

```bash
npm install -g pm2
cd /var/www/hanuman-app
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

This config already sets:

- `PORT=3000`
- `HOSTNAME=0.0.0.0`
- `NODE_ENV=production`

## 6. Optional Nginx reverse proxy

Example Nginx config:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Important note

This app uses runtime API routes in `app/api`, so if you upload only a front-end build without the Node server, parts of the site will not work.
