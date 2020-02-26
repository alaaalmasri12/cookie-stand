'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var random=0;
var CookieStores = [];
var totalstoreslocation=[];


var div = document.getElementById("cookies-sold");
var tableE1 = document.createElement("table");
div.appendChild(tableE1);
header();
var CookieStore = function (storeLocation, minimumGuests, maximumGuests, avgcookies, sum) {
    this.randomResult = [];
    this.total=[];
    this.totalstore=0;
    this.storeLocation = storeLocation;
    this.minimumGuests = minimumGuests;
    this.maximumGuests = maximumGuests;
    this.customernumber = [];
    this.sum=0;
    this.avgcookies = avgcookies;
    CookieStores.push(this);
    console.log('shops array', CookieStores);


}
CookieStore.prototype.custrandom = function () {
    for (var i = 0; i <hours.length-1; i++) {
        this.customernumber = Math.floor(Math.random() * (this.maximumGuests - this.minimumGuests) + this.minimumGuests);
        var cookienumber = Math.floor(this.customernumber * this.avgcookies);
        this.randomResult.push(cookienumber);

        this.sum=this.sum+cookienumber;
        this.total.push(this.sum)
        this.totalstore=this.randomResult[i]+this.randomResult[i];
        totalstoreslocation.push(this.totalstore);
        console.log(this.sum,);
        console.log(this.totalstoreslocation,'total for each store');
        console.log(this.sum);
       
     
        // this.cookienumber=this.totalCookies+cookienumber;

    }
    return this.randomResult,this.total,this.totalstoreslocation;
}

function header() {

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
    tableE1.classList.add("table1");
}
CookieStore.prototype.maintable = function (k) {
    this.custrandom();
    var tabletr = document.createElement("tr");
    tableE1.appendChild(tabletr);
    var th = document.createElement("td");
    tabletr.appendChild(th);
    th.textContent = CookieStores[k].storeLocation;
    for (var j = 0; j < 14; j++) {
        var tdex1 = document.createElement("td");
        tabletr.appendChild(tdex1);
        tdex1.textContent =this.randomResult[j];
    }
   
        var tdtotal = document.createElement("td");
        tabletr.appendChild(tdtotal);
        for(var k=0;k<=hours.length;k++)
        {
        tdtotal.textContent=this.total[k];
    }
  

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
        td1.textContent=totalstoreslocation[i];
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
