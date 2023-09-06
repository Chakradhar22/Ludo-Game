const dice1 = document.getElementById('dice-1')
const rollButton = document.getElementById('rollButton')
const rollDice = () =>{
    if(!dice1.classList.contains('rolling'))
        dice1.classList.add('rolling')
    var dice1Val = Math.floor( (Math.random() * 6) + 1 )
    setTimeout(()=>{
        dice1.dataset.face = dice1Val
        if(dice1.classList.contains('rolling'))
            dice1.classList.remove('rolling')
    }, 3000)
}
dice1.addEventListener('click', function(e){
    e.preventDefault()
    rollDice()
})