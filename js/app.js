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
     for (var i = 0; i < 15; i++) {
       this.custPerHourGenerateArray.push(Math.floor(Math.random()) * (this.maxCust - this.minCust) + this.minCust);
     }
};

Kiosk.prototype.lbsToGoSold =  function() {
  for (var i = 0; i < this.custPerHourGenerateArray.length; i++) {
    this.lbsToGoSoldArray.push(pike.custPerHourGenerateArray[i] * this.avglbs);
  }
};
Kiosk.prototype.numberCupsSold = function() {
  for (var i = 0; i < this.lbsToGoSoldArray.length; i++) {
    this.numberCupsSoldArray.push(this.custPerHourGenerateArray[i] * this.avgCups);
  }
};
Kiosk.prototype.cupsToLbs = function() {
  for (var i = 0; i < this.numberCupsSoldArray.length; i++) {
    this.cupsToLbsArray.push(this.numberCupsSoldArray[i] / 20);
  }
};
Kiosk.prototype.totalBeansSold = function() {
  for (var i = 0; i < this.cupsToLbsArray.length; i++) {
    this.totalBeansSoldArray.push(this.cupsToLbsArray[i] + this.lbsToGoSoldArray[i]);
  }
};

//create instances
var pike = new Kiosk('Pike Place Market', 14, 55, 1.2, 5.7);
var capHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);

var allLocInfo = [pike, capHill, seaPubLib, southLakeUnion, seaTacAirport, websiteSales];
var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var tableHeaders = ['Time', 'Average Customers/Hour', 'Avergage Cups Sold/Hour', 'Avergage Pounds Sold/Hour'];

for (var i = 0; i < allLocInfo.length; i++) {
  allLocInfo[i].custPerHourGenerate();
  allLocInfo[i].totalBeansSold();
}


renderStores = function() {
  //not sure what sectEl is ?
  var sectEl = document.getElementById('test');
 // Create a new Table element
 var tblEL = document.createElement('table');
 // Create a new Table Row element
 var trEl = document.createElement('tr');
 // Create a header for the Row
 var thEl = document.createElement('th');
 // Populate the TH element with some basic text content
 thEl.textContent = '';
 // Append the TH element to the TR element
 trEl.appendChild(thEl);


 // Loop through the hours array, one index at a time
 for (var i = 0; i < tableHeaders.length; i++) {
   // For each iteration of the loop; Create an LI element <li></li>
   var tdEl = document.createElement('td');
   // For each LI element; Assign the contents of the array[i] to the LI's text content
   tdEl.textContent = tableHeaders[i];
   // Append the populated LI element back to the UL as a Child
   trEl.appendChild(tdEl);
 }
 // Append the populated TR element to the Table element
 tblEL.appendChild(trEl);
 // Append the completely populated UL to the sectEl element in index.html
 sectEl.appendChild(tblEL);
}
// Call the renderStores function
renderStores();


//
// rendering: function() {
//   this.custPerHourGenerate();
//   this.lbsToGoSold();
//   this.numberCupsSold();
//   this.cupsToLbs();
//   this.totalBeansSold();
//
//   var ulEl = document.createElement('ul');
//   for (var i = 0; i < this.custPerHourGenerateArray.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = (6+i) + ':00: ' + this.totalBeansSoldArray[i] + ' lbs, [' + this.custPerHourGenerateArray[i] + ' customers, ' + this.numberCupsSoldArray[i] + ' cups (' + this.cupsToLbsArray[i] + ' lbs), ' + this.lbsToGoSoldArray[i] + ' lbs to-go]';
//     ulEl.appendChild(liEl);
//   }
//
//   document.body.appendChild(ulEl);
// }
// };
// pike.rendering();
//

//object literal
// var pike = {
//   minCust: 14,
//   maxCust: 55,
//   avgCups: 1.2,
//   avglbs: 3.7,
//   //hourly customers
//   custPerHourGenerateArray: [],
//   lbsToGoSoldArray: [],
//   numberCupsSoldArray: [],
//   cupsToLbsArray: [],
//   totalBeansSoldArray: [],
//everything in blue is a method inside a object named pike with a function
  // custPerHourGenerate: function() {
  //   //for loop how many customers per hour
  //    for (var i = 0; i < 15; i++) {
  //   //Math.random gives a number of 0-1...Mathfloor rounds it down
  //   //forcing random number to be between max and min
  //      this.custPerHourGenerateArray.push(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
  //    }
  //    //difference between return and console.log??????
  //   //  return this.custPerHourGenerateArray;
  //   //  console.log(this.custPerHourGenerateArray);
  // },
//
//   lbsToGoSold: function() {
//       //for loop setting up for how many lbsToGoSold per each hour
//     for (var i = 0; i < this.custPerHourGenerateArray.length; i++) {
//       //push equation: basically taking 19 avg. cust. multi by avglbs to then pushed to lbsToGoSoldArray
//       this.lbsToGoSoldArray.push(pike.custPerHourGenerateArray[i] * this.avglbs);
//     }
//   },
//   numberCupsSold: function() {
//     //for loop setting up for how many numberCupsSold per each hour
//     for (var i = 0; i < this.lbsToGoSoldArray.length; i++) {
//       //pushes custPerHourGenerate * avg cups.............
//       this.numberCupsSoldArray.push(this.custPerHourGenerateArray[i] * this.avgCups);
//     }
//   },
//   cupsToLbs: function() {
//     //for loop setting up for how many cupstolbs sold per each hour
//     for (var i = 0; i < this.numberCupsSoldArray.length; i++) {
//       //converts numberCupsSold to lbs becasue 1lb equals 20 cups
//       this.cupsToLbsArray.push(this.numberCupsSoldArray[i] / 20);
//     }
//   },
//   totalBeansSold: function() {
//     //for loop setting up for how many totalBeansSold per each hour
//     for (var i = 0; i < this.cupsToLbsArray.length; i++) {
//       //combines cupstolbs and lbsToGoSold to equal totalBeansSold
//       this.totalBeansSoldArray.push(this.cupsToLbsArray[i] + this.lbsToGoSoldArray[i]);
//     }
//   },
//
//   rendering: function() {
//     //call the functions
//     //create var and document.createElement and name of element to connect to HTML
//     this.custPerHourGenerate();
//     this.lbsToGoSold();
//     this.numberCupsSold();
//     this.cupsToLbs();
//     this.totalBeansSold();
//
//     var ulEl = document.createElement('ul');
//     for (var i = 0; i < this.custPerHourGenerateArray.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = (6+i) + ':00: ' + this.totalBeansSoldArray[i] + ' lbs, [' + this.custPerHourGenerateArray[i] + ' customers, ' + this.numberCupsSoldArray[i] + ' cups (' + this.cupsToLbsArray[i] + ' lbs), ' + this.lbsToGoSoldArray[i] + ' lbs to-go]';
//       ulEl.appendChild(liEl);
//     }
//
//     document.body.appendChild(ulEl);
//   }
// };
// pike.rendering();

//
//   // Get the 'months' element from index.html and assign it to sectEl variable
//   var sectEl = document.getElementById('test');
//   // Create a new Table element
//   var tblEL = document.createElement('table');
//   // Create a new Table Row element
//   var trEl = document.createElement('tr');
//
//   // Create a header for the Row
//   var thEl = document.createElement('th');
//   // Populate the TH element with some basic text content
//   thEl.textContent = 'Places';
//   // Append the TH element to the TR element
//   trEl.appendChild(thEl);
//
//
//   // Loop through the months array, one index at a time
//   for (var i = 0; i < custPerHourGenerateArray.length; i++) {
//     // For each iteration of the loop; Create an LI element <li></li>
//     var tdEl = document.createElement('td');
//     // For each LI element; Assign the contents of the array[i] to the LI's text content
//     tdEl.textContent = places[i];
//     // Append the populated LI element back to the UL as a Child
//     trEl.appendChild(tdEl);
//   }
//   // Append the populated TR element to the Table element
//   tblEL.appendChild(trEl);
//   // Append the completely populated UL to the sectEl element in index.html
//   sectEl.appendChild(tblEL);
// }
// // Call the renderMonths function
// renderstoreArray();
