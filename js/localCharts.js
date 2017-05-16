// Colors
const colorBase = '#009688';
// Shades
const color100 = '#A7FFEB';
const color200 = '#64FFDA';
const color400 = '#1DE9B6';
const color700 = '#00BFA5';


// Traffic Charts
Chart.defaults.global.legend.display = false;

// Chart constants
const trafficChartHourly = document.getElementById('traffic-hourly');
const trafficChartDaily = document.getElementById('traffic-daily');
const trafficChartWeekly = document.getElementById('traffic-weekly');
const trafficChartMonthly = document.getElementById('traffic-monthly');

// Hourly Traffic
let trafficHourly = new Chart.Line(trafficChartHourly, {
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
let trafficDaily = new Chart.Line(trafficChartDaily, {
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
let trafficWeekly = new Chart.Line(trafficChartWeekly, {
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
let trafficMonthly = new Chart.Line(trafficChartMonthly, {
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