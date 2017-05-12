// Colors
const colorBase = '#607D8B';
// Shades
const color50 = '#ECEFF1';
const color100 = '#ECEFF1';
const color200 = '#B0BEC5';
const color300 = '#90A4AE';
const color400 = '#78909C';
const color500 = '#607D8B';
const color600 = '#546E7A';
const color700 = '#455A64';
const color800 = '#37474F';
const color900 = '#263238';

// Chart constants
const trafficChartHourly = document.getElementById('traffic-hourly');
const trafficChartDaily = document.getElementById('traffic-daily');
const trafficChartWeekly = document.getElementById('traffic-weekly');
const trafficChartMonthly = document.getElementById('traffic-monthly');

// Traffic Charts
// Hourly Traffic
let trafficHourly = new Chart.Line(trafficChartHourly, {
data: {
  labels: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  datasets: [
        {
          label: '',
          data: [15, 5, 8, 10, 80, 2, 6, 15, 75, 36, 4, 31],  
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
          data: [287, 50, 378, 500, 48, 610, 137],  
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
  labels: ['9-15', '16-22', '23-29', '30-6', '7-13', '14-20', '21-27', '28-3', '4-10', '11-17'],
  datasets: [
        {
          label: '',
          data: [500, 1030, 950, 1200, 1150, 1500, 1489, 1865, 800, 2010],  
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