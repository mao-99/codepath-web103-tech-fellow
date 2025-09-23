//vite.config.js
// It is the behavior that this script triggers that got me confused a couple of weeks ago
//What does this file do?
//This file includes custom instructions to the vite tool to be used when it builds the app.
//The build:{outDir:'...'} sets the output directory which the files in our client/public will get sent. 
//This behavior means that the files in the public gets outputted to the specified directory. 
//Last week when I got confused, I kept seeing the files getting outputted in the specified directory and I didnt initially have them there

//The server section of the configuration defines settings for the development server:

//The proxy setting: This property sets up a proxy for the development server. In this case, any requests to the /workshops path will be proxied to http://localhost:3001. 
//This is useful for API requests during development, allowing the frontend to communicate with a backend server running on a different port without running into cross-origin issues.

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/workshops': {
        target: 'http://localhost:3000'
      }
    }
  }
})
