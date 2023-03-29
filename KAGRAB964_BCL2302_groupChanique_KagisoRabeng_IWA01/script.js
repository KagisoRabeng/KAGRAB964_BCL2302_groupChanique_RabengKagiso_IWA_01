const MAX_NUMBER = 10
const MIN_NUMBER = -5
const STEP_AMOUNT = 1

const number = document.querySelector('[data-key="number"]')
const substract = document.querySelector ('[data-key="substract"]')
const add = document.querySelector ('[data-key="add"]')

const substractHandler = () => {
    const newvalue = parseInt(number.value) - STEP_AMOUNT
    number.value = newvalue
    if (add.disabled === true) {
        add.disabled = false
    }

    if (newvalue <= MIN_NUMBER) {
        substract.disabled = true
    } else {
        substract.disabled = false
    }
}

const addHandler = () => {
    const newvalue = parseInt(number.value)  + STEP_AMOUNT
    number.value = newvalue
    if (substract.disabled === true) {
        substract.disabled = false
    }
    if (newvalue >= MAX_NUMBER) {
        add.disabled = true
    }
}
substract.addEventListener('click', substractHandler)
add.addEventListener('click', addHandler)