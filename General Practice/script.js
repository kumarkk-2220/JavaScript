const name = document.getElementById("name");
const age = document.getElementById("age");
const dogYears = document.getElementById("dogYears");

name.innerText = "Kp Kumar";
age.innerText = 29;

function calculateDogYears(age) {
    dogYears.innerText = Number(age);
    return age * 7;
}

dogYears.innerText = calculateDogYears(age.innerText);

const fakeInputs = document.querySelectorAll(".fake-input");

fakeInputs.forEach((node) => {
    node.classList.replace("fake-input", "real-input");
});
