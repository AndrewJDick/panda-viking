// import MobileDetect from ('mobile-detect');
var MobileDetect = require('mobile-detect');



export default function mobileCheck() {

  var md = new MobileDetect(window.navigator.userAgent);

  window.alert( md.mobile() );
  window.alert( md.phone() );
  window.alert( md.tablet() ); 

}
