function checkresult() {
    var marks = document.getElementById("mark").value;
    var grade = '';
    var scholarship = '';
     
    // For Grade
if(!marks){
    alert("Marks required!");
    return;
}
    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }
    // For scholarship 
    if (marks >= 80) {
        scholarship = "eligible";
    }
    else {
        scholarship = "Not eligible";
    }

    //For display
    document.getElementById("display").innerHTML =
        " Grade: " + grade +"<br>"+ "Scholarship status : " + scholarship; 
}
