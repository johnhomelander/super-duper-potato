

function submitInfo() {
    var empName = document.getElementById("name").value;
    var empAge = document.getElementById("age").value;

    var empGender = document.querySelector('input[name="gender"]:checked').value;
    var empCarsList = document.querySelectorAll(".carCheck");

    var empCars = "";

    for (i=0;i<empCarsList.length;i++){
        if (empCarsList[i].checked) {
            // console.log('yes');
            empCars += empCarsList[i].value + " ";
        }
    }
    // console.log(empCars);
    // console.log(empCarsList);
    var empDesc = document.getElementById("desc").value;

    document.getElementById("output").innerHTML = `Hello, ${empName}. <br> You are ${empAge} years old.<br> You are a ${empGender}.<br> Your vehicles are ${empCars}. <br> 
    Description about you <br> ${empDesc}`

}