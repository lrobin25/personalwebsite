//footer

var footer = document.querySelector('footer');
var div = document.createElement('div');
div.className='bottomline';
footer.appendChild(div);

var ul = document.createElement('ul');
ul.className = 'links';
footer.appendChild(ul);

//linked in

var linkedin = document.createElement('li');
linkedin.className ="linkedin";
ul.appendChild(linkedin);

var alione = document.createElement('a');
alione.href ="https://www.linkedin.com/in/robinsonlaura";
linkedin.appendChild(alione);

var lione = document.createElement('img');
lione.src = "images/In.png" ;
alione.appendChild(lione);

//ssp

var ssp = document.createElement('li');
ssp.className ="ssp";
ul.appendChild(ssp);

var assp = document.createElement('a');
assp.href = "http://www.smallsquarephotography.com";
ssp.appendChild(assp);

var anchorssp = document.createElement('img');
anchorssp.className ="ssp";
anchorssp.src = "images/SSP.jpg";
assp.appendChild(anchorssp);

//email
var email = document.createElement('li');
email.className ="emaillink";
ul.appendChild(email);

var alithree = document.createElement('a');
alithree.href= "mailto:laura.robinson@live.com";
email.appendChild(alithree);

var lithree = document.createElement('img');
lithree.className ="emaillink";
lithree.src = "images/email.jpg";
alithree.appendChild(lithree);

//text

var lifour = document.createElement('li');
lifour.className = 'contact';
lifour.textContent = "Evergreen, CO | 303.555.1212 | laura.robinson@live.com";
ul.appendChild(lifour);


 