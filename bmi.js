function calculateBMI() {
    let weight =(document.getElementById("weight").value);
    let height = (document.getElementById("height").value);  // Height in cm

    if (weight > 0 && height > 0) {
       
        let category = "";
        let bmi = weight / ((height / 100) * (height / 100));

        // Determine BMI category
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Display result in HTML
        document.getElementById("result").innerHTML = 
            `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
    } else {
        document.getElementById("result").innerHTML = 
            "Please enter valid values for weight and height.";
    }
}
