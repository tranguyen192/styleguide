import './sass/style.scss';
// If you need images optimized that are not referenced in you source code, uncomment the following line:
// require.context("./images/", true, /\.(png|svg|jpg|gif)$/);

// example code
var message = "Supports Babel!";
console.log(`Important message: ${message}`);

// var on = false;



document.querySelector ('#on').onclick = function () {
    document.querySelector ('#on').setAttribute('style','display: none !important');
    document.querySelector ('#off').setAttribute('style','display: block !important');
    document.querySelector ('#nav-items').setAttribute('style','display: none !important');
    document.querySelector ('header').setAttribute('style','height: auto !important');
}

document.querySelector ('#off').onclick = function () {
    document.querySelector ('#off').setAttribute('style','display: none !important');
    document.querySelector ('#on').setAttribute('style','display: block !important');
    document.querySelector ('#nav-items').setAttribute('style','display: block !important');
    document.querySelector ('header').setAttribute('style','height: 190px !important');
}





// document.querySelector ('.burgerbutton').onclick = function () {
//   if ( on === false ) {
//     // document.querySelector ('#menu').setAttribute('style','visibility:visible !important');
//     document.querySelector ('#on').setAttribute('style','visibility:visible !important');
//     document.querySelector ('.burgerbutton').setAttribute('style','color:rgba(0,0,0,0) !important');
//     on = true;
//   }
//   else {
//     document.querySelector ('#menu').removeAttribute('style');
//     document.querySelector ('#on').removeAttribute('style');
//     document.querySelector ('#off').removeAttribute('style');
//     on = false;
//   }
// }
