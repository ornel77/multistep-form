/* ------------------------------- DOM Element ------------------------------ */
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const stepNumbers = document.querySelectorAll('.step-number')
const tabs = document.querySelectorAll('[data-tabs]')
const steps = document.querySelectorAll('[data-number]')

/* Convert node list into arrays*/
const stepNumbersArr = [].slice.call(stepNumbers)

/* ---------------------------- FUNCTION HANDLER ---------------------------- */
let index = 0
let tabIndex = 0

/* NEXT STEP FUNCTION */
const nextStep = (e) => {
    e.preventDefault()
    
    //NUMBER
    if(steps[index].classList.contains('active')) {
        steps[index].classList.remove('active')
        steps[index+1].classList.add('active')
        prev.style.display = 'block'
        index++
    }
    let lastElmt = steps[steps.length-1]
    if(steps[index] === lastElmt) {
        next.disabled = true
        next.style.backgroundColor = 'grey'
        next.style.cursor= 'initial'
    }

    //TAB
    if(tabs[tabIndex].classList.contains('visible')) {
        console.log('hello');
        tabs[tabIndex].classList.remove('visible')
        tabs[tabIndex+1].classList.add('visible')
        tabIndex++
    }
}
/* PREV STEP FUNCTION */
let prevNumIndex = 0
let prevTabIndex = 0
const prevStep = e => {
    e.preventDefault()
    //NUMBER
    if(steps[index].classList.contains('active')) {
        steps[index].classList.remove('active')
        steps[index-1].classList.add('active')
        prev.style.display = 'block'
        index--
    }

    let firstElmt = steps[0]
    if(steps[index] === firstElmt) {
        // next.disabled = false
        // next.style.backgroundColor = 'initial'
        // next.style.cursor= 'pointer'

        prev.style.display = 'none'
    }
}
 
/* ----------------------------- EVENT LISTENER ----------------------------- */
/* ONLOAD */
window.onload = () => {
    steps[0].className += ' active'
    tabs[0].className += ' visible'

    prev.style.display = 'none'

    console.log(steps);

}

/* ONCLICK NEXT */
next.addEventListener('click', nextStep)
prev.addEventListener('click', prevStep)




