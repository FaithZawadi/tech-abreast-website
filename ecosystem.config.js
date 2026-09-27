// PM2 process file — keeps the site running and restarts it on crash or reboot.
// Start with:  pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'tech-abreast',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        // Optional: forward contact-form enquiries (Formspree, Zapier, Make, Slack…)
        // CONTACT_WEBHOOK_URL: 'https://…',
      },
    },
  ],
}
