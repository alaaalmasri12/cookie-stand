'use strict';
var open = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Seattle =
{
    cookies: [],
    totalCookiesSoldHour: [],
    storeLocation: 'Seattle',
    max: 23,
    min: 65,
    totalCookies: 0,
    avgcookies: 6.3,
    Location :['Seattle'] ,
    range: this.maximumGuests - this.minimumGuests,
    random: function (min, max) {

        var random = Math.round(Math.floor(((Math.random() * (this.max - this.min) + this.min))));
        console.log(random);
        return random;
    },
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            console.log(randomcookieshour);
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
        return this.cookies;
    },

   
 
    rander: function () {
        var textContent ;
        var container = document.getElementById("location");
        var articleE = document.createElement('article');
        container.appendChild(articleE);

        var ulE4 = document.createElement('h1');
        ulE4.textContent=this.storeLocation;

        articleE.appendChild(ulE4);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for(var i =0; i<open.length ; i++) {
           var liE1 = document.createElement('li');
           
           ulE1.appendChild(liE1);
           liE1.textContent =`${open[i]  } ${  this.cookies[i]    } cookies`;
          
           
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);

        liE1.textContent=`Total ${this.totalCookies} cookies`;

        console.log(container);
        } 
    
        
    } 
var Tokyo =
{
    cookies: [],
    totalCookiesSoldHour: [],
    storeLocation: 'Tokyo',
    minimumGuests: 3,
    maximumGuests: 24,
    totalCookies: 0,
    avgcookies: 1.2,
    range: this.maximumGuests - this.minimumGuests,
    random: function (min, max) {
        var random = Math.round(Math.floor(((Math.random() * (this.max - this.min) + this.min))));
        console.log(random);
        return random;
    }
    ,
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
    },
    rander: function () {
        var textContent ;
        var container = document.getElementById("location");
        var articleE = document.createElement('article');
        container.appendChild(articleE);

        var ulE4 = document.createElement('h1');
        ulE4.textContent=this.storeLocation;

        articleE.appendChild(ulE4);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for(var i =0; i<open.length ; i++) {
           var liE1 = document.createElement('li');
           
           ulE1.appendChild(liE1);
           liE1.textContent =`${open[i]  } ${  this.cookies[i]    } cookies`;
          
           
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);

        liE1.textContent=`Total ${this.totalCookies} cookies`;

        console.log(container);
        } 
}
var Dubai =
{
    cookies: [],
    totalCookiesSoldHour: [],
    storeLocation: 'Dubai',
    minimumGuests: 11,
    maximumGuests: 38,
    totalCookies: 0,
    avgcookies: 3.7,
    range: this.maximumGuests - this.minimumGuests,
    random: function (min, max) {
        var random = Math.round(Math.floor(((Math.random() * (this.max - this.min) + this.min))));
        console.log(random);
        return random;
    },
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
    },
    rander: function () {
        var textContent ;
        var container = document.getElementById("location");
        var articleE = document.createElement('article');
        container.appendChild(articleE);

        var ulE4 = document.createElement('h1');
        ulE4.textContent=this.storeLocation;

        articleE.appendChild(ulE4);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for(var i =0; i<open.length ; i++) {
           var liE1 = document.createElement('li');
           
           ulE1.appendChild(liE1);
           liE1.textContent =`${open[i]  } ${  this.cookies[i]    } cookies`;
          
           
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);

        liE1.textContent=`Total ${this.totalCookies} cookies`;

        console.log(container);
        } 
}
var Paris =
{
    cookies: [],
    totalCookiesSoldHour: [],
    storeLocation: 'Paris',
    minimumGuests: 20,
    maximumGuests: 38,
    totalCookies: 0,
    avgcookies: 2.3,
    range: this.maximumGuests - this.minimumGuests,
    random: function (min, max) {
        var random = Math.floor(Math.random()* (this.max-this.min+1) + this.min); ;
        console.log(random);
        return random;
    },
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
    },
    rander: function () {
        var textContent ;
        var container = document.getElementById("location");
        var articleE = document.createElement('article');
        container.appendChild(articleE);

        var ulE4 = document.createElement('h1');
        ulE4.textContent=this.storeLocation;

        articleE.appendChild(ulE4);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for(var i =0; i<open.length ; i++) {
           var liE1 = document.createElement('li');
           
           ulE1.appendChild(liE1);
           liE1.textContent =`${open[i]  } ${  this.cookies[i]    } cookies`;
          
           
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);

        liE1.textContent=`Total ${this.totalCookies} cookies`;

        console.log(container);
        }
    
}
var Lima =
{
    cookies: [],
    totalCookiesSoldHour: [],
    storeLocation: 'Lima',
    minimumGuests: 2,
    maximumGuests: 16,
    totalCookies: 0,
    avgcookies: 4.6,
    range: this.maximumGuests - this.minimumGuests,
    random: function (min, max) {

        var random = Math.round(Math.floor(((Math.random() * (this.max - this.min) + this.min))));
        console.log(random);
        return random;
    },
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
    },
    rander: function () {
        var textContent ;
        var container = document.getElementById("location");
        var articleE = document.createElement('article');
        container.appendChild(articleE);

        var ulE4 = document.createElement('h1');
        ulE4.textContent=this.storeLocation;

        articleE.appendChild(ulE4);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for(var i =0; i<open.length ; i++) {
           var liE1 = document.createElement('li');
           
           ulE1.appendChild(liE1);
           liE1.textContent =`${open[i]  } ${  this.cookies[i]    } cookies`;
          
           
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);

        liE1.textContent=`Total ${this.totalCookies} cookies`;

        console.log(container);
        }
}

console.log('Location :' + Seattle.Location);
//run

 Seattle.random(23,65);
  Tokyo.random(3,24);
 Paris.random(11,38);
 Dubai.random(20,38);
 Lima.random(2,16);
Seattle.getsoldcookiesinhour(23, 65, 6.3);
Tokyo.getsoldcookiesinhour(3,24,1.2);
Dubai.getsoldcookiesinhour(11,38,3.7);
Paris.getsoldcookiesinhour(20,38,2.3);
Lima.getsoldcookiesinhour(2,16,4.6);
Seattle.rander();
Tokyo.rander();
Dubai.rander();
Paris.rander();
Lima.rander();
