/* Change background-color of navbar  when scrolling */

document.addEventListener('scroll', onScroll, {passive:true});

function onScroll () {
  const homeHeight = 680;
  const scrollPosition = pageYOffset;
  const nav = document.querySelector('.nav');

  if (homeHeight <= scrollPosition) {
    nav.style.backgroundColor = '#48445b'
  } else {
    nav.style.backgroundColor = '#00000000'
  };
}

/* Copy the email address when user click the icon */

document.addEventListener('DOMContentLoaded', function() {
  var copyEmailIcon = document.getElementById('copy-button');
  var emailText = 'leaf_1003@naver.com';

  copyEmailIcon.addEventListener('click', function() {
    copyToClipboard(emailText);
    alert('Email address has been copied. : ' + emailText);
  });

function copyToClipboard(text) {
 if (navigator.clipboard) {
   navigator.clipboard.writeText(text).then(function() {
       console.log('Copying to clipboard successfully');
     }).catch(function(err) {
       console.error('Failed to copy to clipboard', err);
     });
  } else {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    }
  }
});

/* Get scroll y position

window.addEventListener('scroll', function(){
  console.log(window.scrollY)
});
*/

/* Change the font-weight of the nav-item when scrolling */

document.addEventListener('scroll', doScroll, {passive:true});

const home = document.getElementById('href-1');
home.style.fontWeight = 'bold'

function doScroll () {
  const scrollLocation = document.documentElement.scrollTop || document.querySelector('html').scrollTop;

  const instroHeight = 680;
  const projHeight = 1790;
  const contactHeight = 2690;

  const home = document.getElementById('href-1');
  const instro = document.getElementById('href-2');
  const proj = document.getElementById('href-3');
  const contact = document.getElementById('href-4');

  if (instroHeight > scrollLocation) {
    home.style.fontWeight = 'bold'
    instro.style.fontWeight = 'normal';
    proj.style.fontWeight = 'normal';
    contact.style.fontWeight = 'normal';
  } 

  else if ((scrollLocation>=instroHeight)&&(projHeight>scrollLocation)){
    home.style.fontWeight = 'normal'
    instro.style.fontWeight = 'bold'
    proj.style.fontWeight = 'normal';
    contact.style.fontWeight = 'normal';
  }

  else if ((scrollLocation>=projHeight)&&(contactHeight>scrollLocation)){
    home.style.fontWeight = 'normal';
    instro.style.fontWeight = 'normal'
    proj.style.fontWeight = 'bold'
    contact.style.fontWeight = 'normal';
  }

  else {
    home.style.fontWeight = 'normal';
    instro.style.fontWeight = 'normal'
    proj.style.fontWeight = 'normal'
    contact.style.fontWeight = 'bold'
  };
}

