// selecting elements
 let rupees = document.getElementById("rupees");
 let dollar = document.getElementById("dollar");

 console.log(rupees);

// onChange event listner

rupees.onchange = () => {
    let value = rupees.value;
console.log(value);

}

alert("working");