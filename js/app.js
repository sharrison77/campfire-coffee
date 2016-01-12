//object literals
var pike = {
  minCust: 14,
  maxCust: 55,
  avgCups: 1.2,
  avgLbs: 3.7,
  custPerHourArray: [],
  lbsToGoSoldArray: [],
  numberCupsSoldArray: [],
  cupsToLbsArray: [],
  totalBeansSoldArray: [],
//everything in blue is a method inside a variable with a function
  custPerHourGenerate: function() {
    //for loop starts with 1st hour  and increment by 1 until 15 hours are met how many customers at each hour
     for (var i = 0; i < 15; i++) {
       //math.floor(math.random) is used to get random number of customers between min and max
       ///hmmm what is the + 14?
       //mathfloor rounds down e.g. 23.9292348 (23) math.random (0-1).....(0-19) (about 5) so need to add the min 14.
       //19 is pushed into custPerHourArray
       pike.custPerHourArray.push(Math.floor(Math.random() * (33 - 14)) + 14);
     }
  },

  lbsToGoSold: function() {
      //for loop setting up for how many lbsToGoSold per each hour
    for (var i = 0; i < pike.custPerHourArray.length; i++) {
      //push equation: basically taking 19 avg. cust. multi by avglbs to then pushed to lbsToGoSoldArray
      pike.lbsToGoSoldArray.push(pike.custPerHourArray[i] * pike.avgLbs);
    }
  },
  numberCupsSold: function() {
    for (var i = 0; i < pike.lbsToGoSoldArray.length; i++) {
      //
      pike.numberCupsSoldArray.push(pike.lbsToGoSoldArray[i] * pike.avgCups);
    }
  },
  cupsToLbs: function() {
    for (var i = 0; i < pike.numberCupsSoldArray.length; i++) {
      pike.cupsToLbsArray.push(pike.numberCupsSoldArray[i] / 20);
    }
  },
  totalBeansSold: function() {
    for (var i = 0; i < pike.cupsToLbsArray.length; i++) {
      pike.totalBeansSoldArray.push(pike.cupsToLbsArray[i] + pike.lbsToGoSoldArray[i]);
    }
  },


  rendering: function() {
    //call the functions
    //create var and document.createElement and name of element to connect to HTML
    //for loop get customer per hour
    this.custPerHourGenerate();
    this.lbsToGoSold();
    this.numberCupsSold();
    this.cupsToLbs();
    this.totalBeansSold();
    var ulEl = document.createElement('ul');
    for (var i = 0; i < pike.custPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = (6+i) + ':00: ' + this.totalBeansSoldArray[i] + ' lbs, [' + this.custPerHourArray[i] + ' customers, ' + this.numberCupsSoldArray[i] + ' cups (' + this.cupsToLbsArray[i] + ' lbs), ' + this.lbsToGoSoldArray[i] + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }

    document.body.appendChild(ulEl);
  }
};
pike.rendering();
//
// var capitolhill = {
//   minCust: 32,
//   maxCust: 48,
//   avgCups: 3.2,
//   avgLbs: 0.4
// };
//
// var seattlepubliclibrary = {
//   minCust: 49,
//   maxCust: 75,
//   avgCups: 2.6,
//   avgLbs: 0.2
// };
//
// var slakeunion = {
//   minCust: 35,
//   maxCust: 88,
//   avgCups: 1.3,
//   avgLbs: 3.7
// };
//
// var seatacairport = {
//   minCust: 68,
//   maxCust: 124,
//   avgCups: 1.1,
//   avgLbs: 2.7
// };
//
// var websitesales = {
//   minCust: 3,
//   maxCust: 6,
//   avgCups: 0,
//   avgLbs: 6.7
// };
