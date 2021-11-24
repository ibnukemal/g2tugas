function konversiSuhu() {
    var temp = Number(document.getElementById('temprature').value)
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var hasil   

    if (from == 'Celcius') {
        if (to == "Celcius") {
            hasil = temp
        } else if (to == 'Fahrenheit') {
            hasil = (temp * 9/5) + 32
        } else if (to == 'Kelvin') {
            hasil = temp + 273.15
        } else if (to == 'Reamur') {
            hasil = (temp * 4/5)
        }
    } else if (from == 'Fahrenheit') {
        if (to == 'Celcius') {
            hasil = (temp - 32) * 5/9
        } else if (to == 'Fahrenheit') {
            hasil = temp
        } else if (to == 'Kelvin') {
            hasil = ((temp - 32) * 5/9) + 273.15
        } else if (to == 'Reamur') {
            hasil = (temp - 32) * 4/9
        }
    } else if (from == 'Kelvin') {
        if (to == 'Celcius') {
            hasil = temp - 273
        } else if (to == 'Fahrenheit') {
            hasil = 9/5 * (temp-273) + 32
        } else if (to == 'Kelvin') {
            hasil = temp
        } else if (to == 'Reamur') {
            hasil = 4/5 * (temp - 273)
        }
    } else if (from == 'Reamur') {
        if (to == 'Celcius') {
            hasil = 5/4 * temp
        } else if (to == 'Fahrenheit') {
            hasil = 9/4 + temp + 32
        } else if (to == 'Kelvin') {
            hasil = (temp /(4*5)) + 273
        } else if (to == 'Reamur') {
            hasil = temp 
        }
    }

document.getElementById('result').value = hasil

}