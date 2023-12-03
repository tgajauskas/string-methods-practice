const inputName = document.getElementById("inputName")
const inputNumber = document.getElementById("inputNumber")
const result = document.getElementById("result")
const secondInputName = document.getElementById("secondInputName")
const thirdInputName = document.getElementById("thirdInputName")

function checkInput() {
    const inputNum = parseInt(inputNumber.value)
    const inputNam = inputName.value
    if(isNaN(inputNum) || !Number.isInteger(Number(inputNum)) || inputNum < 0){
        alert(`Jūsų įvestas skaičius nėra sveikas arba yra neigiamas. Prašome įrašyti arba pakeisti į sveikąjį ar teigiamą skaičių.`)
        return
    }
    if(inputNam === ""){
        alert(`Įveskite savo vardą.`)
        return
    }
    result.innerHTML = "" 
    for (var i = 0; i < inputNum; i++){
        const h1 = document.createElement("h1")
        h1.textContent = inputNam
        result.appendChild(h1)
    }
    inputName.value = ""
    inputNumber.value = ""
}

function checkName(){
    const secondInputName = document.getElementById("secondInputName").value.trim()
    if (secondInputName === "") {
        alert(`Įveskite savo vardą`)
        return
    }{
        const nameLength = secondInputName.length
        alert(`Jūsų vardo ilgis yra: ${nameLength}`)
    }
}

function checkFirstLast() {
    if(thirdInputName.value === ""){
        alert(`Įveskite savo vardą ir pavardę`)
        return
    }{
        const fullName = document.getElementById("thirdInputName").value
        const nameFirstLast = fullName.split(' ')
        const firstName = document.getElementById("firstName")
        const lastName = document.getElementById("lastName")
        firstName.textContent = `${nameFirstLast[0] || ''}`; 
        lastName.textContent = `${nameFirstLast[1] || ''}`; 
    }
    thirdInputName.value = ""
}