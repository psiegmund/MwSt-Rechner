// let testBtn = document.getElementsByName('aufAb');
let amountInput = document.getElementById('input-betrag');
let btnAuf = document.getElementById("input-zzgl");
let btnAb = document.getElementById("input-abzgl");
let set19 = document.getElementById('satz-19');
let set7 = document.getElementById('satz-7');
let outputAmount = document.getElementById('betrag-result');
let outputPrice = document.getElementById('endpreis-result');
let chgTxt = document.getElementById('textbruttonetto')

let aufAb = 1.19;
let set = 19

let calculate = () => {
    if (btnAuf.checked && set19.checked) {
        outputPrice.innerHTML = amountInput.value * 1.19;
        outputAmount.innerHTML = amountInput.value * 1.19 - amountInput.value;
    }
    else if (btnAuf.checked && set7.checked) {
        outputPrice.innerHTML = amountInput.value * 1.07;
        outputAmount.innerHTML = amountInput.value * 1.07 - amountInput.value;
    }
    else if (!btnAuf.checked && set19.checked) {
        outputPrice.innerHTML = amountInput.value / 119 * 100;
        outputAmount.innerHTML = (amountInput.value / 119 * 100 - amountInput.value) * -1;
    }
    else if (!btnAuf.checked && set7.checked) {
        outputPrice.innerHTML = amountInput.value / 107 * 100;
        outputAmount.innerHTML = (amountInput.value / 107 * 100 - amountInput.value) * -1;
    }
}

let chgText = () => {
    if (btnAuf.checked) {
        chgTxt.innerHTML = 'Nettobetrag ( Preis ohne MwSt. in Euro)';
    }
    else {
        chgTxt.innerHTML = 'Bruttobetrag ( Preis inkl. MwSt. in Euro)';
    }
}
