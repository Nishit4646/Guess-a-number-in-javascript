const userinput = document.querySelector('.userinput')
const form = document.querySelector('form')
const Result = document.querySelector('.result')
const allguesses = document.querySelector('.allguessnumber')
const Submitbtn = document.querySelector('.Submitbtn')
const restartgame = document.querySelector('.restartgame')

// efiy 
;(function(){
    const allguessesArray = []
    let randomnumber = Math.round(Math.random() * 100)
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const userinputvalue = parseInt(userinput.value)
        if (userinputvalue < randomnumber) {
            Result.innerText = 'Too low!'
        } else if (userinputvalue > randomnumber) {
            Result.innerText = 'Too high!'
        } else {
            Result.innerText = 'You got it Congratulatin!'
            restartgame.disabled = false
            Submitbtn.disabled = true
        }
        allguessesArray.push(userinputvalue)
        allguesses.innerText = 'Your guesses: ' + allguessesArray.join(', ')
        form.reset(userinputvalue)
    })
    
    restartgame.addEventListener('click', () => {
        Result.innerText = ''
        allguesses.innerText = ''
        restartgame.disabled = true
        Submitbtn.disabled = false
        randomnumber = Math.round(Math.random() * 100)
    })
    
})() 
 

