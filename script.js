
document.querySelector('.wrapper').style.display = 'none';
document.querySelector('body').classList.add('spinner');

setTimeout(() => {
    
    document.querySelector('body').classList.remove('spinner');
    document.querySelector('.wrapper').style.display = 'block';
    
}, 2000);

var typed6 = new Typed('.typed', {
    strings: ["^1000 It's time to introduce myself, ^1000 trust me it won't be long. ^1000 Let's start :) ^1000 <br><br> ^500 Wait, ^500 I have an object of my personal details, ^500 so I'd prefer to do this in JavaScript way. ^500 Let's do it!^500 <span class='coding'><br><br>handsomeBoy.name = awesomeName;^500 <br>handsomeBoy.getName();^500 <br>handsomeBoy.getNick();^500 <br>handsomeBoy.getAge();^500 <br>handsomeBoy.getEducation();^500 <br>handsomeBoy.sendDataToVisitor();</span>^500 <br><br> ^500 Well,^500 I'm a new-comer big fan of JavaScript Development thanks to <a href='https://hacktiv8.com/' style='color:#ebeb1a; text-decoration:none'>Hacktiv8</a> in collaboration with <a href='https://www.facebook.com/groups/DevCBali/' style='color:#ebeb1a; text-decoration:none'>Facebook DevC Bali</a> that arranged a free JavaScript Development Course in the island of paradise. ^1000 This site was spceially built for the final project in the end of the course. ^1000 <br><br> That's it everyone! ^500 Quite short, huh? ^1000 <br><br> ^500 Now open your console^500 <br>Windows: Ctrl + Shift + J	<br> MacOS: Cmd + Opt + J ^500 <br><br> Yes of course, I'm available on social media platforms just like everyone out there :p "],
    typeSpeed: 50,
    startDelay: 2000,
    loop: false
  });

var awesomeName = "Misbahul Munir";

var handsomeBoy = {
  nick: "Munir",
  birthYear: 1992,
  currentYear: 2019,
  university: "STIKOM BALI Jimbaran",
  major: "System Information",

  getName: function() {
    this.fullName = "Hey, my name is "+ this.name; 
  },
  getNick: function(){
    this.nickName = "You can call me "+ this.nick;
  },
  getAge: function() {
    this.age = "I'm "+ (this.currentYear - this.birthYear) +" years old";
  },
  getEducation: function() {
    this.education = "I'm currently taking "+ this.major + " in "+ this.university;
  },
  sendDataToVisitor: function() {

    console.log(this.fullName);
    console.log(this.nickName);
    console.log(this.age);
    console.log(this.education);

  }
}

handsomeBoy.name = awesomeName;
handsomeBoy.getName();
handsomeBoy.getNick();
handsomeBoy.getAge();
handsomeBoy.getEducation();
handsomeBoy.sendDataToVisitor();

