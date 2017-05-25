// Alerts
function displayAlerts() {
    document.getElementById('notificationOne').style.display='inline-flex';
    document.getElementById('notificationTwo').style.display='inline-flex';
    document.getElementById('dashboardHeader').style.marginBottom = '+70px';
}

function closeAlert1() {
    document.getElementById('notificationOne').style.display='none';
    document.getElementById('notificationOne').innerHTML='';
    document.getElementById('dashboardHeader').style.marginBottom =  ; // Figure out how to subtract X from margin
}
function closeAlert2() {
    document.getElementById('notificationTwo').style.display='none';
    document.getElementById('notificationTwo').innerHTML='';
    document.getElementById('dashboardHeader').style.marginBottom = '35px';
}

// Chart Script
function openChart(evt, chartTime) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(chartTime).style.display = "block";
    evt.currentTarget.className += " active";
}

// Message popups
function validateMessage() {
    var x = document.getElementById('userSearchBox').value;
    var y = document.getElementById('userMessageBox').value;
    if (x === '') {
        alert("Please specify a user to message.");
    } else if (y === '') {
        alert("Please enter a message.");
    } else {
        window.alert("MESSAGE SENT!");
        document.getElementById('userSearchBox').value = '';
        document.getElementById('userMessageBox').value = '';
    }
}