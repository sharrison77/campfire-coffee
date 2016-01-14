'use strict'
//global variables
var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//constructor
function Kiosk (storeName, minCust, maxCust, avgCups, avglbs) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.avglbs = avglbs;
  this.custPerHourGenerateArray = [];
  this.lbsToGoSoldArray = [];
  this.numberCupsSoldArray = [];
  this.cupsToLbsArray = [];
  this.totalBeansSoldArray = [];
};

Kiosk.prototype.custPerHourGenerate = function() {
     for (var i = 0; i < hoursOpen.length; i++) {
       this.custPerHourGenerateArray.push((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)));
     }
};

Kiosk.prototype.totalBeansSold = function() {
  for (var i = 0; i < hoursOpen.length; i++) {
    this.lbsToGoSoldArray.push(this.custPerHourGenerateArray[i] * this.avglbs);
    this.numberCupsSoldArray.push(this.custPerHourGenerateArray[i] * this.avgCups);
    this.cupsToLbsArray.push(this.numberCupsSoldArray[i] / 20);
    this.totalBeansSoldArray.push(this.cupsToLbsArray[i] + this.lbsToGoSoldArray[i]);
    console.log("totalBeansSoldArray" + this.totalBeansSoldArray);
  }
};

  var sectEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Time of Day';
  trEl.appendChild(thEl);
  // tblEl.appendChild(trEl);
  sectEl.appendChild(trEl);

  for (var i = 0; i < hoursOpen.length; i++) {
    var thEl2 = document.createElement('th');
    thEl2.textContent = hoursOpen[i];
    trEl.appendChild(thEl2);
    sectEl.appendChild(trEl);
  }

  Kiosk.prototype.render = function() {
    this.custPerHourGenerate();
    this.totalBeansSold();


    var trEl2 = document.createElement('tr');
    var tdEl2 = document.createElement('td');
    tdEl2.textContent = this.storeName;
    trEl2.appendChild(tdEl2);
    sectEl.appendChild(trEl2);


    for (var i = 0; i < hoursOpen.length; i++) {
    var tdEl3 = document.createElement('td');
    tdEl3.textContent = this.totalBeansSoldArray[i].toFixed(1);
    trEl2.appendChild(tdEl3);
    sectEl.appendChild(trEl2);
    }
  };

  //create instances
  var pike = new Kiosk('Pike Place Market', 14, 55, 1.2, 5.7);
  var capHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
  var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
  var southLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
  var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
  var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);
  //calling
  pike.render();
  capHill.render();
  seaPubLib.render();
  southLakeUnion.render();
  seaTacAirport.render();
  websiteSales.render();
