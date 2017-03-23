// import MobileDetect from ('mobile-detect');
var MobileDetect = require('mobile-detect');

export default function mobileCheck() {

  var md = new MobileDetect(window.navigator.userAgent);

  if (md.phone() === null && md.tablet() === null) {
    window.alert('working');
  } else {
    window.alert('not working');
  }


}
