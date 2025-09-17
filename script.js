function calculateImc() {
    const peopleKg = window.parseFloat(document.getElementById('peopleKg').value)
    const peopleM = window.parseFloat(document.getElementById('peopleM').value)
    const result = window.document.getElementById('result')
    let imc = peopleKg / peopleM ** 2

    if (isNaN(peopleKg) || isNaN(peopleM) || peopleKg <= 0 || peopleM <= 0) {
        alert("Os dados não podem estar vazios!")

    } else {
        if (imc < 17) {
            result.innerHTML = `Seu IMC é <span style="color: red;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: red;"><strong>Muito abaixo do peso!</strong></span>`

        } else if (imc >= 17 && imc <= 18.49) {
            result.innerHTML = `Seu IMC é <span style="color: orange;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: orange;"><strong>Abaixo do peso!</strong></span>`

        } else if (imc >= 18.5 && imc <= 24.99) {
            result.innerHTML = `Seu IMC é <span style="color: green;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: green;"><strong>Peso normal.</strong></span>`

        } else if (imc >= 25 && imc <= 29.99) {
            result.innerHTML = `Seu IMC é <span style="color: orange;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: orange;"><strong>Acima do peso!</strong></span>`

        } else if (imc >= 30 && imc <= 34.99) {
            result.innerHTML = `Seu IMC é <span style="color: red;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: red;"><strong>Obesidade!</strong></span>`

        } else if (imc >= 35 && imc <= 39.99) {
            result.innerHTML = `Seu IMC é <span style="color: red;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: red;"><strong>Obesidade severa!</strong></span>`

        } else if (imc > 40) {
            result.innerHTML = `Seu IMC é <span style="color: red;"><strong>${imc.toFixed(2)}</strong><br></span>Status: <span style="color: red;"><strong>Obesidade mórbida!</strong></span>`
        }
    }

}