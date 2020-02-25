'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var random=0;
var CookieStores = [];

var div = document.getElementById("cookies-sold");
var tableE1 = document.createElement("table");
div.appendChild(tableE1);
header();
var CookieStore = function (storeLocation, minimumGuests, maximumGuests, avgcookies, sum) {
    this.randomResult = [];
    this.storeLocation = storeLocation;
    this.minimumGuests = minimumGuests;
    this.maximumGuests = maximumGuests;
    this.customernumber = [];
    this.totalCookies = 0;
    this.avgcookies = avgcookies;
    this.sum = 0;
    CookieStores.push(this);
    console.log('shops array', CookieStores);


}
CookieStore.prototype.custrandom = function () {
    for (var i = 0; i < hours.length; i++) {
        this.customernumber = Math.floor(Math.random() * (this.maximumGuests - this.minimumGuests) + this.minimumGuests);
        var cookienumber = Math.floor(this.customernumber * this.avgcookies);
        this.cookienumber=this.totalCookies+cookienumber;
        //   this.numberofcookies[i]+=this.customernumber;
        console.log(cookienumber,'sim of');
        this.randomResult.push(cookienumber);
        console.log(this.customernumber, 'array');
        console.log('ytytyty',this.randomResults)
    }
    return this.randomResult;


}
function header() {
    // console.log("opend the the function");
    // var cont = document.getElementById('cookies-sold');
    // tableE1.classList.add("hours");
    // cont.appendChild(tableE1);
    // var firstrow = document.createElement('tr');
    // tableE1.appendChild(firstrow);
    // var tbody=document.createElement("tbody");
    // tableE1.appendChild(tbody);
    // for(var i=0;i<=hours.length;i++)
    // {
    // var firstheader = document.createElement('th');
    // firstrow.appendChild(firstheader);
    // firstheader.textContent=hours[i];
    // console.log(firstheader);
    // }
    var tr = document.createElement("tr");
    tableE1.appendChild(tr);
    var firstcell = document.createElement("th");
        tr.appendChild(firstcell);
        firstcell.textContent='store'
    for(var i=0 ; i<hours.length;i++)
    {
        var firstcell = document.createElement("th");
        tr.appendChild(firstcell);
        firstcell.textContent=hours[i];
    }
    var lastcell=document.createElement("th");
    tr.appendChild(lastcell);
    lastcell.textContent="Daily Location Total";
   
   
    
    tableE1.border = '2';
}
CookieStore.prototype.maintable = function (k) {
    this.custrandom();
    // var tbody=document.createElement("tbody");
    // tableE1.appendChild(tbody);

    var tabletr = document.createElement("tr");
    tableE1.appendChild(tabletr);
    var th = document.createElement("td");
    tabletr.appendChild(th);
    th.textContent = CookieStores[k].storeLocation;
    for (var j = 0; j < 14; j++) {
        var tdex1 = document.createElement("td");
        console.log(tdex1);
        tabletr.appendChild(tdex1);
        tdex1.textContent =this.randomResult[j];
    }
    var tdtotal = document.createElement("td");
        tabletr.appendChild(tdtotal);
        tdtotal.textContent=this.cookienumber;

}




function footer() {
    var f1 = document.createElement("tr");
    tableE1.appendChild(f1);
    var firstcell=document.createElement("td");
    f1.appendChild(firstcell);
    firstcell.textContent="Totals";
    for(var i=0;i<=hours.length-1;i++)
    {
        var td1=document.createElement("td");
        f1.appendChild(td1);
        td1.textContent='asdasd';
    }
    
    

}
var Seattle = new CookieStore("Seattle", 23, 65, 6.3);
var Tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
var Dubai = new CookieStore("Dubai", 11, 38, 3.7);
var Paris = new CookieStore("Paris", 20, 38, 2.3);
var Lima = new CookieStore("Lima", 16, 2, 4.6);
for (var i = 0; i < CookieStores.length; i++) {
 
    CookieStores[i].custrandom();
    CookieStores[i].maintable(i);
}
footer();
console.log('this is cookies: ' , CookieStores);
