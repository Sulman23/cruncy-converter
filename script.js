// selecting elements
    let rupees = document.getElementById("rupees");
    let dollar = document.getElementById("dollar");


// onChange Rs to dollar convert
    rupees.onchange = () => {
        let value = rupees.value * 180.80;
        dollar.value = value.toFixed(2);
    }

// onChange Dollar to Rupess convert
    dollar.onchange = () => {
        let value = dollar.value / 0.0055;
        rupees.value = value.toFixed(2);
    }