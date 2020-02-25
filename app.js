'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var random=0;
var CookieStores = [];
var customercookiesperhour =[];

var CookieStore=function(storeLocation,minimumGuests,maximumGuests,avgcookies,sum)
{
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
    }
    return random; 
}
CookieStore.prototype.cookiesPerHr=function()
{
    for (var i = 0; i < 1; i++) {

        var result = this.custrandom() * Math.floor(this.avgcookies);
        console.log("res", result);
        this.sum = Math.floor(this.sum + result);
        console.log(this.sum);
       customercookiesperhour.push(Math.floor(result));
        console.log(this.customercookiesperhour,'work');

    }
    return result;

}




CookieStore.prototype.render=function()
{
    var cont = document.getElementById('cookies-sold');
    var h2 =document.createElement('h2');
    console.log(h2);
    cont.appendChild(h2);
    var h3=document.createElement('h3');    
    cont.appendChild(h3);
    h3.textContent= this.storeLocation;
    console.log("h3",h3);
console.log(cont);
    var ul = document.createElement('ul');
    console.log(ul);
    cont.appendChild(ul);
    for(var i =0; i<hours.length ; i++) {
        var li = document.createElement('li');
      ul.appendChild(li);
        li.textContent =`${hours[i]}:${this.cookiesPerHr()} cookies`;
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
 for (var i =0; i< CookieStores.length; i++) {
    CookieStores[i].cookiesPerHr();
    CookieStores[i].render();


  }
 Seattle.custrandom();
 Seattle.cookiesPerHr();



