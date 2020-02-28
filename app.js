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
var Seattle = {
    name:'Seattle',
    max: 65,
    min: 23,
    avg: 6.3,
    sum:0,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random = Math.floor(Math.random() * (this.max - this.min)+1)
            var result = random * this.avg;
            console.log("res",result);
       this.sum=Math.ceil(this.sum+result);
console.log(this.sum);
            arr.push(Math.floor(result));
            
        }
        console.log("res",arr);
        return random;
    },
render:function(){
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
}
var Tokyo = {
    name:'Tokyo',
    max: 24,
    min: 3	,
    avg: 1.2,
    sum2:0,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random2 = Math.floor(Math.random() * (this.max - this.min)+1)
            var result2 = random2 * this.avg;
            console.log("res",result2);
       this.sum2=Math.ceil(this.sum2+result2);
console.log(this.sum2);
            arr2.push(Math.floor(result2));

        }
        console.log("res",arr);
        return result2;
    },
    getsoldcookiesinhour: function () {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
        
    },
render:function(){
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
        li.textContent =`${hours[i]}:${arr2[i]} cookies`;
    console.log(li);
    }
    var li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.textContent =`total ${this.sum2} cookies`;
}
}
var Dubai	 = {
    name:'Dubai	',
    max: 38	,
    min: 11		,
    avg: 3.7,
    sum3:0,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random3 = Math.floor(Math.random() * (this.max - this.min)+1)
            var result3 = random3 * this.avg;
            console.log("res",result3);
       this.sum3=Math.ceil(this.sum3+result3);
console.log(this.sum3);
            arr3.push(Math.floor(result3));
            
        }
        console.log("res",arr);
        return result3;
    },
render:function(){
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
        li.textContent =`${hours[i]}:${arr3[i]} cookies`;
    console.log(li);
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
