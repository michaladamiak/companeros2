document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('#navigation');
    const logoBiale = document.querySelector('#logo-biale');
    const logoBrazowe = document.querySelector('#logo-brazowe');
    const falaBiala = document.querySelector('#fala-biala');
    const falaBrazowa = document.querySelector("#fala-brazowa");
    const navigationElements = document.querySelectorAll('.navigation-element')

    const fale = document.querySelector('#fale');
    const closeSign = document.querySelector('#close-sign');
    const content = document.querySelector('#content');
    const modulee = document.querySelector('#module');

    window.onscroll = () => {
        if(this.scrollY <= 20) {
          navbar.className = '';
          logoBiale.className = '';
          logoBrazowe.className = '';
          falaBiala.className = '';
          falaBrazowa.className = '';
        } else {
          navbar.className = 'scroll';
          logoBiale.className = 'biale-scroll';
          logoBrazowe.className = 'brazowe-scroll';
          falaBiala.className = 'biale-scroll';
          falaBrazowa.className = 'brazowe-scroll';
        }
      };

      fale.addEventListener('click', () => {
        content.style.display = 'none';
        modulee.style.display = 'flex';
      })

      navigationElements.forEach(element => {
        element.addEventListener('click', () => {
          content.style.display = 'initial';
          modulee.style.display = 'none';
        })
      })

      closeSign.addEventListener('click', () => {
        content.style.display = 'initial';
        modulee.style.display = 'none';
      })
    

})