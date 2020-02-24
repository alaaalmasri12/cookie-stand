'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var random=0;
var customerperhour =[];

var CookieStore=function(storeLocation,minimumGuests,maximumGuests,avgcookies,sum)
{


    var CookieStores = [];
    this.storeLocation=storeLocation;
        this.minimumGuests=minimumGuests,
        this.maximumGuests=maximumGuests
        this.totalCookies=0,
        this.avgcookies=avgcookies,
        this.sum=0;
        CookieStores.push(this);
        console.log('shops array',CookieStores);

      
}
CookieStore.prototype.custrandom =function()
{
    for (var i = 0; i < hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maximumGuests - this.minimumGuests)+this.minimumGuests);
        console.log(random,'random');
    }
    return random; 
}
CookieStore.prototype.cookiesPerHr=function()
{
    for (var i = 0; i < hours.length; i++) {

        var result = this.custrandom() * this.avgcookies;
        console.log("res", result);
        this.sum = Math.ceil(this.sum + result);
        console.log(this.sum);
        customerperhour.push(Math.floor(result));

    }
    console.log("res", customerperhour);
    return random;
}


CookieStore.prototype.render=function()
{
    var cont = document.getElementById('cookies');
    var h2 =document.createElement('h2');
    console.log(h2);
    cont.appendChild(h2);
    var h3=document.createElement('h3');    
    cont.appendChild(h3);
    h3.textContent= this.name;
    console.log("h3",h3);
console.log(cont);
    var ul = document.createElement('ul');
    console.log(ul);
    cont.appendChild(ul);
    for(var i =0; i<hours.length ; i++) {
        var li = document.createElement('li');
      ul.appendChild(li);
        li.textContent =`${hours[i]}:${arr[i]} cookies`;
    console.log(li);
    }
    var li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.textContent =`total ${this.sum} cookies`;
}



var Seattle=new CookieStore("Seattle",23,65,6.3);
 var Tokyo=new CookieStore("Tokyo",3,24,1.2);
 var Dubai=new CookieStore("Dubai",11,38,3.7);
 var Paris=new CookieStore("Paris",20,38,2.3);
 var Lima=new CookieStore("Lima",16,2,4.6);
 Seattle.custrandom();
 Seattle.cookiesPerHr();



