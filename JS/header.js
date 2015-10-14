//header

var header = document.querySelector('header');

var topspace = document.createElement('div');
topspace.className = 'top';
header.appendChild(topspace);

var headerone = document.createElement('div');
headerone.className = 'headerone';
topspace.appendChild(headerone);

var h1 = document.createElement('h1');
h1.textContent = "laura robinson";
h1.className = 'h1';
headerone.appendChild(h1);
 
//navbar
var navbar = document.createElement('nav');
navbar.className = 'navbar';
headerone.appendChild(navbar);

var navitems = document.createElement('ul');
navbar.appendChild(navitems);

//

var li4nav = document.createElement('li');
navitems.appendChild(li4nav);

var lifour = document.createElement('a');
lifour.className = 'contact';
lifour.textContent = "contact";
lifour.href = "contact.html";
li4nav.appendChild(lifour);

//

var li3nav = document.createElement('li');
navitems.appendChild(li3nav);

var lithree = document.createElement('a');
lithree.className = 'contact';
lithree.textContent = "education";
lithree.href="accomplishments.html#education";
li3nav.appendChild(lithree);

//
var li2nav = document.createElement('li');
navitems.appendChild(li2nav);

var litwo = document.createElement('a');
litwo.className = 'contact';
litwo.textContent = "accomplishments";
litwo.href="accomplishments.html";
li2nav.appendChild(litwo);

//

var li1nav = document.createElement('li');
navitems.appendChild(li1nav);

var lione = document.createElement('a');
lione.className = 'contact';
lione.textContent = "bio";
lione.href="index.html";
li1nav.appendChild(lione);
 
//3 descriptors of LR

var three = document.createElement('div');
three.className = 'headertwo';
topspace.appendChild(three);

var adjectives = document.createElement('ul');
three.appendChild(adjectives);

var li3one = document.createElement('li');
li3one.className = 'contact';
li3one.textContent = "problem solver";
adjectives.appendChild(li3one);

var li3two = document.createElement('li');
li3two.className = 'contact';
li3two.textContent = "change agent";
adjectives.appendChild(li3two);

var li3three = document.createElement('li');
li3three.className = 'contact';
li3three.textContent = "volunteer";
adjectives.appendChild(li3three);


