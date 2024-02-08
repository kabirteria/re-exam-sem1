document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

       
        const name = document.getElementById('name').value;
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

       
        let status;
        if (bmi < 18.5) {
            status = 'underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = 'normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = 'overweight';
        } else {
            status = 'obese';
        }

      
        document.getElementById('your_name').textContent = name + ", ";
        document.getElementById('bmiOutput').textContent = bmi;
        document.getElementById('bmiStatus').textContent = status;
    });
});
