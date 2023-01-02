# PWA-text-editor

"scripts": {
    "start:dev": "concurrently \"cd server && npm run server\" \"cd client && npm run dev\"",
    "start": "npm run build && cd server && node server.js",
    "server": "cd server nodemon server.js --ignore client",
    "build": "cd client && npm run build",
    "install": "cd server && npm i && cd ../client && npm i",
    "client": "cd client && npm start"
  },

  {
  "icons": [
    {
      "src": "/assets/icons/icon_512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon_384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon_256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon_192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon_128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon_96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    }
  ],
  "name": "Just Another Text Editor",
  "short_name": "J.A.T.E",
  "orientation": "portrait",
  "display": "standalone",
  "start_url": "/",
  "description": "Takes notes with JavaScript syntax highlighting!",
  "background_color": "#225ca3",
  "theme_color": "#225ca3"
}