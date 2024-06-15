const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonDelivery = document.querySelector("#addDelivery");
buttonDelivery.addEventListener("click", showDelivery);

function showDelivery(e) {
    e.preventDefault();
    delivery.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const delivery = document.querySelector("#delivery").value;

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'ошибка',
            title: 'Ошибка!',
            text: 'Введите данные!'
          })
      return false;
    }
        
//ФОРМУЛЫ
    let amountPerPerson = bill / people;
    let tipPerPerson = (bill*delivery) / people;
    let totalSum = amountPerPerson + tipPerPerson;

//toFixed()
amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

//Показываем в приложении

document.querySelector("#dividedBill").textContent = amountPerPerson;
document.querySelector("#dividedDelivery").textContent = tipPerPerson;
document.querySelector("#billAndDelivery").textContent = totalSum;
}

gsap.from('#container', {duration: 2, delay: 0.2, ease: 'power2.in', opacity: 0})
