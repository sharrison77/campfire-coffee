//raises little problems that could raise big problems later
'use strict'
//global variables
//where are using for loop and to display
var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//object constructor....this.etc are properties
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
//prototype attaches to constructor
//add methods to the prototype of constructor allows you to use instances
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

//This creates table & Location head row
  var tableEl = document.getElementById('tableData');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);

//This creates hours on table head
  for (var i = 0; i < hoursOpen.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
    tableEl.appendChild(trEl);
  }

//render method that's attached to the constructor
//methods are a behavior of the object
    Kiosk.prototype.render = function() {
      //calling to put data in arrays
    this.custPerHourGenerate();
    this.totalBeansSold();


    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);
    // tableEl.appendChild(trEl); Don't need


    for (var i = 0; i < hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalBeansSoldArray[i].toFixed(1);
    trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
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

  // Event listener for Data submission form
  //listens to data-form not submit button
  var dataForm = document.getElementById('data-form');
  dataForm.addEventListener('submit', handleDataSubmit); // once clicked handleDataSubmit function come to play

//event handler from line 98-112
// This function handles Data Submissions
  function handleDataSubmit(event) {
    console.log(event);
    //prevents from reloading page
    event.preventDefault();
    //validation
    if (!event.target.co.value || !event.target.min.value || !event.target.max.value || !event.target.cups.value || !event.target.lbs.value) {
      return alert('Fields cannot be empty!');
    }

    //This creates new instances
    var newCompany = new Kiosk(event.target.co.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.cups.value), parseInt(event.target.lbs.value))
    //behavior that call kiosk share?
    newCompany.render();
  };

  //clear submission boxes
