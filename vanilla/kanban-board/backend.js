const nameInput = document.querySelector("#name-input");
const descriptionInput = document.querySelector("#description-input")

const submitBtn = document.querySelector("#Submit-button");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameInput.value);
    console.log(descriptionInput.value);

    fetch(`http://localhost:8000?name=${nameInput.value}&description=${descriptionInput.value}`)
})