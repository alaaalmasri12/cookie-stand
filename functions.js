CookieStore.prototype.Displayvalues = function () {
    for(var i=0;i<=open.length;i++)
    {
      var cooke=document.querySelectorAll(".Seattle li");
      cooke[i].innerHTML=open[i]+":  "+this.totalCookiesSoldHour[i]+"  cookies";

  }
}
store1.Displayvalues();
store2.Displayvalues();
store3.Displayvalues();
store4.Displayvalues();
store5.Displayvalues();
