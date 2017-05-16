// Colors
var colorBase = '#009688';
// Shades
var color100 = '#A7FFEB';
var color200 = '#64FFDA';
var color400 = '#1DE9B6';
var color700 = '#00BFA5';


// Traffic Charts
// Chart.defaults.global.legend.display = false;
Chart.defaults.global.legend.responsive = true;

// Chart constants
var trafficChartHourly = document.getElementById('traffic-hourly');
var trafficChartDaily = document.getElementById('traffic-daily');
var trafficChartWeekly = document.getElementById('traffic-weekly');
var trafficChartMonthly = document.getElementById('traffic-monthly');
// Stand-Alone Chart Constants
var dailyStandAlone = document.getElementById('trafficDaily');
var mobileChart = document.getElementById('mobileChart');
var twitterChart = document.getElementById('twitterChart');
var facebookChart = document.getElementById('facebookChart');
var googlePlusChart = document.getElementById('googlePlusChart');

// Hourly Traffic
var trafficHourly = new Chart.Line(trafficChartHourly, {
  options: {
    legend: {
      display: false,
    },
  },
  data: {
    labels: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    datasets: [
          {
            label: '',
            data: [5, 8, 10, 45, 7, 15, 25, 60, 43, 22, 31],  
            lineTension: 0,
            borderWidth: 3,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            showLine: true,
            spanGaps: true,          
          }
      ]
  },
});

// Daily Traffic
var trafficDaily = new Chart.Line(trafficChartDaily, {
  options: {
    legend: {
      display: false,
    },
  },
  data: {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [
          {
            label: '',
            data: [175, 50, 78, 105, 80, 225, 187],  
            lineTension: 0,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            showLine: true,
            spanGaps: true,          
          }
      ]
  },
});

//Weekly Traffic
var trafficWeekly = new Chart.Line(trafficChartWeekly, {
  options: {
    legend: {
      display: false,
    },
  },
  data: {
    labels: ['16-22', '23-29', '30-6', '7-13', '14-20', '21-27', '28-3', '4-10', '11-17'],
    datasets: [
          {
            label: '',
            data: [400, 600, 750, 625, 725, 850, 950, 700, 725],  
            lineTension: 0,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            showLine: true,
            spanGaps: true,          
          }
      ]
  },
}); 

// Monthly Traffic
var trafficMonthly = new Chart.Line(trafficChartMonthly, {
  options: {
    legend: {
      display: false,
    },
  },
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
          {
            label: '',
            data: [3680, 2530, 1950, 5654, 4250, 6507, 2489, 6865, 7800, 5010, 8426, 3689],
            lineTension: 0,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            showLine: true,
            spanGaps: true,          
          }
      ]
  },
}); 

// Stand-Alone Charts

// Daily
var dailyChart = new Chart.Line(dailyStandAlone, {
  options: {
    legend: {
      display: false,
    },
  },
  data: {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [
          {
            label: '',
            data: [175, 50, 78, 105, 80, 225, 187],  
            lineTension: 0,
            pointBorderWidth: 3,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointStyle: 'circle',
            showLine: true,
            spanGaps: true,          
          }
      ]
  },
});

// Mobile Users
var mobileUsersChart = new Chart(mobileChart, {
  options: {
    legend: {
      position: 'right',
      display: true,
    },
  },
  type: 'doughnut',
  data: {
  labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [65, 20, 15],
            backgroundColor: [
                color700,
                color400,
                color200
            ],
            hoverBackgroundColor: [
                color100,
                color100,
                color100
            ]
        }]
  }
});

// Twitter
// Facebook
// Google+