// import MobileDetect from ('mobile-detect');
var MobileDetect = require('mobile-detect');



export default function mobileCheck() {

  var md = new MobileDetect(window.navigator.userAgent);

  console.log( md.mobile() );
  console.log( md.phone() );
  console.log( md.tablet() ); 

}
