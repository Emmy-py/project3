const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")

let age;

mySubmit.onclick = function() {
    age = myText.value
    age = Number(age)

    switch (true) {
        case (age > 100):
            resultElement.textContent = `you are too old for this site :)`
            break;
        case (age === 0):
            resultElement.textContent = `your age cannot be zero`
            break;
        case (age >= 18):
            resultElement.textContent = `you have been granted access to this site`
            break;
        case (age < 0):
            resultElement.textContent = `your age cannot be negative`
            break;
        case (age < 18):
            resultElement.textContent = `your are not old enough to access this site`
            break;
        default:
            resultElement.textContent = `input correct age`
    }
}
