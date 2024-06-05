document.addEventListener("DOMContentLoaded", () => {
    let toggleSwitch = document.querySelector(".switch");
    let topBg = document.querySelector('.top-bg');
      let body = document.querySelector('.body');
      let card = document.querySelectorAll('.card');
      let grayText = document.querySelectorAll('.gray-text');
      
    
  
    toggleSwitch.addEventListener("change", () => {
      body.classList.toggle('body-light');
      topBg.classList.toggle('top-bg-light');
          
          card.forEach(card => {
              card.classList.toggle('card-light');
              if(!card.classList.contains('dark')) {
                  card.classList.add('dark');
              } else {
                  card.classList.remove('dark');
              }
          })
  
          grayText.forEach(gText => {
              gText.classList.toggle('gray-text-light')
          })
    });
  });