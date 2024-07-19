if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker зарегистрирован с областью:', registration.scope);
    }).catch(error => {
      console.log('Регистрация Service Worker завершилась неудачей:', error);
    });
  });
}



let startY = 0; 
let currentY = 0; 
let isScrolling = false; 
const maxStretch = 100; // Максимальное значение растяжения 
 
document.addEventListener('touchstart', (e) => { 
  startY = e.touches[0].clientY; 
  isScrolling = false; 
}); 
 
document.addEventListener('touchmove', (e) => { 
  if (!isScrolling) { 
    currentY = e.touches[0].clientY; 
    let diff = currentY - startY; 
    if ((diff > 0 && window.scrollY === 0) || (diff < 0 && window.scrollY + window.innerHeight >= document.body.clientHeight)) { 
      e.preventDefault(); 
      let stretchAmount = Math.min(Math.abs(diff), maxStretch) * Math.sign(diff); // Ограничиваем растяжение 
      document.querySelector('main').classList.add('elastic-effect'); 
      document.querySelector('main').style.transform = `translateY(${stretchAmount}px)`; 
    } else { 
      isScrolling = true; 
    } 
  } 
}); 
 
document.addEventListener('touchend', () => { 
  document.querySelector('main').classList.remove('elastic-effect'); 
  document.querySelector('main').style.transform = 'translateY(0)'; 
}); 

// {
//   "name": "DC Next",
//   "short_name": "DC Next App",
//   "theme_color": "#F1F1F3",
//   "background_color": "#F1F1F3",
//   "display": "standalone",
//   "orientation": "portrait",
//   "start_url": ".",
//   "icons": [
//       {
//           "purpose":"maskable",
//           "sizes":"512x512",
//           "src":"/icon512_maskable.png",
//           "type":"image/png"
//       },
//       {
//           "purpose":"any",
//           "sizes":"512x512",
//           "src":"/icon512_rounded.png",
//           "type":"image/png"
//       }
//   ],
//   "splash_screens": [
//   {
//     "src": "/apploading.jpg",
//     "sizes": "1080x2350",
//     "type": "image/jpg",
//     "background_color": "#ffffff"
//   },
//   {
//     "src": "/apploading.jpg",
//     "sizes": "1280x720",
//     "type": "image/jpg",
//     "background_color": "#ffffff"
//   }
// ]
// }