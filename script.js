
document.querySelector('.wrapper').style.display = 'none';
document.querySelector('body').classList.add('spinner');

setTimeout(() => {
    
    document.querySelector('body').classList.remove('spinner');
    document.querySelector('.wrapper').style.display = 'block';
    
}, 2000);

var typed6 = new Typed('.typed', {
    strings: ["^1000 It's the time now to introduce myself, ^1000 trust me it won't be long. ^1000 Let's start :) <br><br> ^1000 My name is shown on the top-left corner of this page. ^2000 Hard to pronounce? ^2000 No worries you can call me the one light grayish yellow colored. ^1000 <br><br> I'm a new-comer big fan of JavaScript Development thanks to Hacktiv8 in collaboration with Facebook Developer Circle arranging a JavaScript Development Course in a beautiful island of Bali. ^1000 This site is specially built for the final project in the end of the course. ^1000 <br><br> That's it everyone! ^500 Quite short, huh? ^1000 <br><br> Yes of course, I'm on social media platforms just like everyone out there :p"],
    typeSpeed: 70,
    startDelay: 2000,
    loop: false
  });
