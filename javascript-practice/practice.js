let doctorname= "Dr Maxwell";
console.log(doctorname);

let patientname= "John";
console.log(patientname);

patientname= "Mary"
console.log(patientname);

let department= "cardiology";
console.log(department);

const hospitalname= "Greenfield Hospital";
console.log(hospitalname);

let number1 = "10";
let number2 = "5";
console.log(number1 + number2);

let doctors = 50;
let nurses = 20;
console.log(doctors+nurses);

let hospitalOpen = true;
console.log(hospitalOpen);

let hospitalClose = false;
console.log(hospitalClose);

let patientRegistered = true;
let signedUp = false;
let emergencyDepartmentOpen = true;

console.log(patientRegistered);
console.log(signedUp);
console.log(emergencyDepartmentOpen);

let appointmentBooked = false;
if (appointmentBooked) {
    console.log("Your Appointment is confirmed");
}

let emergencyCareAvailable = true;
if (emergencyCareAvailable) {
    console.log("Emergency care is available");
}

let visitorsVisitingHour = false;
if (visitorsVisitingHour) {
    console.log("Welcome To Greenfield Hospital");
}
else {  
        console.log("The Hospital is currently closed");
    }

    let malePatientAge = 10;
    if (malePatientAge >= 18) {
        console.log("Visit General Medicine.");
    }
    else if (malePatientAge <= 18){
        console.log("Visit Pediatrics.");
    } 
    else {
        console.log("Please provide a valid age.");
    }
    
    let patientAge = 65;
if (patientAge < 13) {
    console.log("Pediatrics.");
} else if (patientAge < 18) {
    console.log("Adolescent care.");
} else if (patientAge < 60) {
    console.log("Adult care.");
} else {
    console.log("Geriatric care.");
}

let femalePatientAge = 25;
if (femalePatientAge === 25) {
    console.log("The patient age is 25.");}
else {
    console.log("The patient is not 25");
}

let appointmentStatus = "booked";
if (appointmentStatus === "booked") {
    console.log("Appointment is confirmed");}
    else{
        console.log("Please book an appointment");
    }

    let appointmentUpdate = "cancelled";
if (appointmentUpdate === "booked") {
    console.log("Appointment is confirmed");}
    else{
        console.log("Please book an appointment");
    }

    let procedureBooked = true;
let doctorAvailable = true;
if (procedureBooked && doctorAvailable) {
    console.log("Your appointment can proceed.");
}
let phoneAvailable = false;
let emailAvailable = true;

if (phoneAvailable || emailAvailable) {
    console.log("You can contact Greenfield Hospital.");
}

let hospitalClosed = false;

if (!hospitalClosed) {
    console.log("The hospital is open.");
} 

function hospitalMessage() {
    console.log("Welcome to Greenfield Hospital");
}
hospitalMessage();

function hospitalAvailable() {
    console.log("The Hospital is open")
} 
hospitalAvailable();

function welcomePatient(patientName) {
    console.log("Welcome to Greenfield Hospital, " + patientName);
}
welcomePatient("John");
welcomePatient("Mary");
welcomePatient("Sarah");

function doctorGreeting(doctorName){
    console.log("Welcome, " + doctorName);
}
doctorGreeting("Dr. Maxwell")

function calculateTotal(number1, number2){
    return number1 + number2;
}
let total = calculateTotal(10, 5);
console.log(total)

let heading = document.querySelector("h1");
console.log(heading);
