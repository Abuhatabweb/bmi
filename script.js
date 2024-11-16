let score = document.querySelector(".score")
let statu = document.querySelector(".status")
let calc = document.querySelector(".calc")
let bmi = ""

calc.addEventListener("click" , () => {
    let height = +document.querySelector(".height").value
    let weight = +document.querySelector(".weight").value
    let h = height/100
    bmi = ((weight) / (h*h)).toFixed(2)
    let state = ""
    if(bmi <= 18.5){
        state = "Underweight"
    }else if (18.5 <= bmi && bmi<= 24.9){
        state = "Normal weight"
    }
    else if (25 <= bmi &&  bmi <= 29.9){
        state = "Overweight"
    }
    else if (30 <= bmi &&  bmi<= 34.9){
        state = "Obesity Class I"
    }
    else if (35 <= bmi &&  bmi <= 39.9){
        state = "Obesity Class II"
    }
    else if (40 <= bmi){
        state = "Obesity Class III"
    }
    score.innerHTML = `Your BMI is ${bmi}`
    statu.innerHTML = `You are ${state}`
})