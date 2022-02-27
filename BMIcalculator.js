function BMIcal(height,weight)
{
    alert("hi there!")
    var height = prompt("enter your height in meters");
    var weight = prompt("enter your weight in kgs");

    const BMI = weight / (height * height);

     alert(" your BMI is " + BMI);
    
}



BMIcal();

