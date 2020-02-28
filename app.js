'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var CookieStores = [];//main object   that will store objects
var div = document.getElementById("cookies-sold");
var tableE1 = document.createElement("table");
div.appendChild(tableE1);
header();
var CookieStore = function (storeLocation, minimumGuests, maximumGuests, avgcookies) {
    this.storeLocation = storeLocation;
    this.minimumGuests = minimumGuests;
    this.maximumGuests = maximumGuests;
    this.avgcookies = avgcookies;
    this.randomResult = [];//array that will hold random value
    this.sum=0;
    //this.total=[];
    //this.totalstore=0;
    //this.customernumber = [];
    CookieStores.push(this);
    console.log('shops array', CookieStores);


}
CookieStore.prototype.custrandom = function () {
    var Result=0;
    for (var i = 0; i <hours.length; i++) {
        var random = Math.floor(Math.random() * (this.maximumGuests - this.minimumGuests) + this.minimumGuests);
        var Result = Math.floor(random * this.avgcookies);
        this.sum=Math.ceil(this.sum+Result);
        this.randomResult.push(Math.floor(Result));

    }
    return random
};

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
    for (var j = 0; j < hours.length; j++) {
        var tdex1 = document.createElement("td");
        tabletr.appendChild(tdex1);
        tdex1.textContent =this.randomResult[j];
    }
   
        var tdtotal = document.createElement("td");
        tabletr.appendChild(tdtotal);
        for(var k=0;k<=hours.length;k++)
        {
        tdtotal.textContent=this.sum;
    }
  

}




function footer() {
    
    var total=0;
    var res=0;
    var lastrow=document.createElement("tr");
    tableE1.appendChild(lastrow);
    var td=document.createElement("td");
    lastrow.appendChild(td);
    td.textContent="total";
    console.log("sadasd");
    for(var count=0;count<hours.length;count++)
    {
        var td1=document.createElement("td");
        lastrow.appendChild(td1);
        total=0;
        console.log(Seattle.randomResult[0]);
        for(var i=0;i<CookieStores.length;i++)
        {
            total=total+CookieStores[i].randomResult[count];
        }
        td1.textContent=total;
        res=total+res;
    }

    var res1=document.createElement("td");
    lastrow.appendChild(res1);
    res1.textContent=res;
    var td7=document.createElement("td");
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
//this is a footer
footer();
console.log('this is cookies: ' , CookieStores);
