const MobileDetect = require('mobile-detect');

export default class AddDesktopClass {

  constructor(elem, addClass) {
    this.elements = document.querySelectorAll(elem);
    this.class = addClass;

    this.detectDevice();
  }
  
  detectDevice() {
    const md = new MobileDetect(window.navigator.userAgent);

    // Add classes only on non-mobile devices
    if (md.phone() === null && md.tablet() === null) {
      this.addClass();
    }
  }

  addClass() {
    this.elements.forEach((element, index) => {
      element.classList.add(this.class);
    });
  }
}
