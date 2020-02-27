/* ------------------------------- DOM Element ------------------------------ */
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const stepNumbers = document.querySelectorAll('.step-number')
const tabs = document.querySelectorAll('.tabs')
const steps = document.querySelectorAll('[data-number]')

/* Convert node list into arrays*/
const stepNumbersArr = [].slice.call(stepNumbers)

/* ---------------------------- FUNCTION HANDLER ---------------------------- */
let index = 0

/* NEXT STEP FUNCTION */
const nextStep = (e) => {
    e.preventDefault()
    
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

    // tabs.forEach((tab, index) => {
    //     console.log(index);
    //     if(tab.classList.contains('invisible')) {
    //         tab.classList.remove('invisible')
    //     } else {
    //         tab.className += ' invisible'
    //     }
        
    // })
}
/* PREV STEP FUNCTION */
const prevStep = e => {
    e.preventDefault()
}
 
/* ----------------------------- EVENT LISTENER ----------------------------- */
/* ONLOAD */
window.onload = () => {
    for (let i = 1; i < tabs.length; i++) {
        tabs[i].className += ' invisible'
    }

    stepNumbers[0].className += ' active'

    prev.style.display = 'none'

    console.log(steps);

}

/* ONCLICK NEXT */
next.addEventListener('click', nextStep)
prev.addEventListener('click', prevStep)




