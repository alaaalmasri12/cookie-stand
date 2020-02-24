'use strict';
var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var arr = [];
var arr2=[];
var arr3=[];
var arr4=[];
var arr5=[];

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

    ,
    getsoldcookiesinhour: function (min, max, avgcookies) {
        for (var i = 0; i <= open.length; i++) {
            var randomcookieshour = Math.round(Math.floor(((Math.random() * (max - min)) + min)));
            var cookieshour = randomcookieshour * Math.floor(this.avgcookies);
            this.cookies[i] = cookieshour;
            this.totalCookies += randomcookieshour;
            console.log(cookieshour);
            
        }
        console.log("res",arr);
        return random2;
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
        return random3;
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
    var li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.textContent =`total ${this.sum3} cookies`;
}
}
var Paris		 = {
    name:'Paris',
    max: 38	,
    min: 20		,
    avg: 2.3,
    sum4:0,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random4 = Math.floor(Math.random() * (this.max - this.min)+1)
            var result4 = random4 * this.avg;
            console.log("res",result4);
       this.sum4=Math.ceil(this.sum4+result4);
console.log(this.sum4);
            arr4.push(Math.floor(result4));
            
        }
        console.log("res",arr);
        return random4;
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
        li.textContent =`${hours[i]}:${arr4[i]} cookies`;
    console.log(li);
    }
    var li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.textContent =`total ${this.sum4} cookies`;
}
}
var Lima		 = {
    name:'Lima',
    max: 16		,
    min: 2			,
    avg: 4.6,
    sum5:0,
    randomValues: function () {
        for (var i = 0; i < hours.length; i++) {
            var random5 = Math.floor(Math.random() * (this.max - this.min)+1)
            var result5 = random5 * this.avg;
            console.log("res",result5);
       this.sum5=Math.ceil(this.sum5+result5);
console.log(this.sum5);
            arr5.push(Math.floor(result5));
            
        }
        console.log("res",arr);
        return random5;
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
        li.textContent =`${hours[i]}:${arr4[i]} cookies`;
    console.log(li);
    }
    var li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.textContent =`total ${this.sum5} cookies`;
}
}

Seattle.randomValues();
Seattle.render();
Tokyo.randomValues();
Tokyo.render();
Dubai.randomValues();
Dubai.render();
Paris.randomValues();
Paris.render();
Lima.randomValues();
Lima.render();
