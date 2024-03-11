function calculateAge() {
    var month = document.getElementById('month').value;
    var date = document.getElementById('date').value;
    var year = document.getElementById('year').value;
    
    if (!isValidDate(month, date, year)) {
        document.getElementById('result').innerHTML = "Please enter valid month, date, and year.";
        return;
    }
    
    var birthdate = new Date(year, getMonthIndex(month), date);
    var today = new Date();
    
    var ageInMilliseconds = today - birthdate;
    var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    
    var remainingMilliseconds = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365);
    var ageInMonths = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
    
    remainingMilliseconds = remainingMilliseconds % (1000 * 60 * 60 * 24 * 30);
    var ageInDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

    var generation = getGeneration(ageInYears);
    
    document.getElementById('result').innerHTML = `Your age is: ${ageInYears} years, ${ageInMonths}  months, and ${ageInDays} days.
                                                   You belong to ${generation}.`;
}

function getGeneration(age) {
    if (age >= 0 && age < 6) {
        return "Alpha";
    } else if (age >= 6 && age < 25) {
        return "Gen Z";
    } else if (age >= 25 && age < 41) {
        return "Millennial";
    } else if (age >= 41 && age < 57) {
        return "Gen X";
    } else if (age >= 57 && age < 76) {
        return "Baby Boomer";
    } else if (age >= 76) {
        return "Silent Generation";
    } else {
        return "Unknown";
    }
}



function isValidDate(month, date, year) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!months.includes(month)) {
        return false;
    }
    if (date < 1 || date > 31) {
        return false;
    }
    if (year < 0 || isNaN(year)) {
        return false;
    }
    return true;
}

function getMonthIndex(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.indexOf(month);}







































/*function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    
    var date = new Date();  
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    /*var month = ['January' === 31,'February' === 28,'March' === 31,'April' === 30,'May' === 31,'June' === 30,'July' === 31,'August' === 31,'September' === 30,'October' === 31,'November' === 30,'December' === 31];*/
   /* var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];*/

  /*  if(d1> d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1> m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;


    document.getElementById('age').innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days
    Congratulations!!!Now you know your age😂`

}*/
/*
function age() {
    var birthdateString = document.getElementById('birthdate').value;
    
    if (!isValidDate(birthdateString)) {
        document.getElementById('result').innerHTML = "Please enter a valid birthdate in the format: Month Day, Year (e.g. June 15, 1990)";
        return;
    }
    
    var birthdate = new Date(birthdateString);
    var today = new Date();
    
    var ageInMilliseconds = today - birthdate;
    var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    
    var remainingMilliseconds = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365);
    var ageInMonths = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
    
    remainingMilliseconds = remainingMilliseconds % (1000 * 60 * 60 * 24 * 30);
    var ageInDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
    
    document.getElementById('result').innerHTML = "Your age is: " + ageInYears + " years, " + ageInMonths + " months, and " + ageInDays + " days.";
}

*/