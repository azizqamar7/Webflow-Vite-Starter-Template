// src/global/index.js
// This file contains code that runs on all pages

console.log('Global script loaded')

// Example of a simple utility function
export const domReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback)
  } else {
    callback()
  }
}

// Initialize global stuff
domReady(() => {
  console.log('DOM is fully loaded')
})
