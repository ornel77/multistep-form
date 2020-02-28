/* ------------------------------- DOM Element ------------------------------ */
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const stepNumbers = document.querySelectorAll('.step-number')
const tabs = document.querySelectorAll('[data-tabs]')
const steps = document.querySelectorAll('[data-number]')

/* Convert node list into arrays*/
const stepNumbersArr = [].slice.call(stepNumbers)

/* ---------------------------- FUNCTION HANDLER ---------------------------- */
let numIndex = 0
let tabIndex = 0

/* NEXT STEP FUNCTION */
const nextStep = (e) => {
    e.preventDefault()
    
    //NUMBER
    if(steps[numIndex].classList.contains('active')) {
        steps[numIndex].classList.remove('active')
        steps[numIndex+1].classList.add('active')
        prev.style.display = 'block'
        numIndex++
        console.log(numIndex);
    }

    //TAB
    if(tabs[tabIndex].classList.contains('visible')) {
        tabs[tabIndex].classList.remove('visible')
        tabs[tabIndex+1].classList.add('visible')
        tabIndex++
        console.log(tabIndex);
    }

    //next button disabled
    let lastElmtStep = steps[steps.length-1]
    let lastElmtTabs = tabs[tabs.length-1]
    if((steps[numIndex] === lastElmtStep) && (tabs[tabIndex] === lastElmtTabs) ) {
        next.style.display = 'none'
    }
}


/* PREV STEP FUNCTION */
const prevStep = e => {
    e.preventDefault()
    //NUMBER
    if(steps[numIndex].classList.contains('active')) {
        steps[numIndex].classList.remove('active')
        steps[numIndex-1].classList.add('active')
        prev.style.display = 'block'
        next.style.display = 'block'
        numIndex--
    }

    if(tabs[tabIndex].classList.contains('visible')) {
        tabs[tabIndex].classList.remove('visible')
        tabs[tabIndex-1].classList.add('visible')
        prev.style.display = 'block'
        next.style.display = 'block'
        tabIndex--
    }

    let firstElmt = steps[0]
    if(steps[numIndex] === firstElmt) {
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

/* ONCLICK NEXT and PREV */
next.addEventListener('click', nextStep)
prev.addEventListener('click', prevStep)




