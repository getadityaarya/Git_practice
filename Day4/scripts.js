/************ OBJECT PRACTICE ************/
let student = {
    name: "Aditya",
    age: 25,
    course: "MSC"
};

console.log(student.age);
console.log(student.name);

student.age = 21;
student.address = "Pune";

/************ ARRAY PRACTICE ************/
let courses = ["MSc", "BSc", "Phd", "Highschool"];

/************ ARRAY OF OBJECTS ************/
let students = [
    { name: "Aditya", age: 22, course: "MSc" },
    { name: "Rahul", age: 19, course: "BSc" }
];

students.forEach(s => console.log(s.name));

/************ FUNCTIONS PRACTICE ************/

// Default function
function Hello() {
    console.log("Hey, How are you?");
}
Hello();

// Parameterized function
function greet(a, b) {
    console.log("Hey " + a + " " + b);
}
greet("Aditya", "Arya");

// Return function
function add(a, b) {
    return a + b;
}
console.log(add(12, 33));

function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20));

/************ DATA TYPES ************/
let name = "Aditya";
let age = 23;
let status = "single";

console.log(name, age, status);

/************ IF–ELSE ************/
let marks = 42;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

/************ LOOPS ************/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

/************ ARRAY PRACTICE ************/
let my_array = [2, 4, 5, 7, 5];

console.log(my_array[0]);
console.log(my_array[my_array.length - 1]);

for (let i = 0; i < my_array.length; i++) {
    console.log(my_array[i]);
}

/************ STUDENT NAMES ARRAY ************/
let studentNames = ["Aditya", "Shivam", "Rahul", "Aman"];

/************ DOM FUNCTIONS ************/

// Show student object details
function studentInfo() {
    document.getElementById("info").innerText =
        `Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`;
}

// Show all student names
function showStudents() {
    document.getElementById("studentList").innerText =
        "Students: " + studentNames.join(", ");
}

// Marks checker
function showMarks() {
    let marks = document.getElementById("result").value;

    if (marks === "") {
        alert("Please enter your marks");
    } else if (marks >= 40) {
        alert("Pass");
    } else {
        alert("Fail");
    }
}
