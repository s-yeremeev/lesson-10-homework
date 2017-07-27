
const newCard = document.getElementById("newCard")
const pass = document.getElementById("pass")

/**
 * function clickNewCard
 * @param {*} event 
 */
const clickNewCard = function (event) {
    event.preventDefault()           

    const addPointsPlayer = document.getElementById("pointsPlayer")
    let pointPlayer = Math.floor(Math.random() * (11 - 1) + 1)
    let inerPlayer = +addPointsPlayer.innerText
    addPointsPlayer.innerText = inerPlayer + pointPlayer
        
    const addPointsArtInt = document.getElementById("pointsArtInt")
    let inerArtInt = +addPointsArtInt.innerText
    if(inerArtInt <= 20) {
        let pointArtInt = Math.floor(Math.random() * (11 - 1) + 1)
        addPointsArtInt.innerText = inerArtInt + pointArtInt  
    }          
}

    newCard.addEventListener("click", clickNewCard)


/**
 * function clickPass
 * @param {*} event 
 */
const clickPass = function (event) {
    event.preventDefault()
    
    const addPointsPlayer = document.getElementById("pointsPlayer")
    const inerPlayer = +addPointsPlayer.innerText
    const addPointsArtInt = document.getElementById("pointsArtInt")
    let inerArtInt = +addPointsArtInt.innerText

    if (inerArtInt <= 20) {
        let pointArtInt = Math.floor(Math.random() * (11 - 1) + 1)                
        addPointsArtInt.innerText = inerArtInt + pointArtInt
        inerArtInt = +addPointsArtInt.innerText
    }    

    const checkPoints = inerPlayer > inerArtInt
    const checkMaxPlayer = inerPlayer >= 22
    const checkMaxArtInt = inerArtInt >= 22

    if(checkMaxPlayer) alert(LOSE_LIMIT_PLAYER + inerPlayer)
    else if (checkMaxArtInt) alert(LOSE_LIMIT_ARTINT + inerArtInt)
    else if(checkPoints) alert("You won.\nYou typed: " + inerPlayer + "\nYour opponent type: " + inerArtInt)
    else if(!checkPoints) alert("You lose.\nYou typed: " + inerPlayer + "\nYour opponent type: " + inerArtInt)
    else alert(DRAW)
                        
    addPointsPlayer.innerText = 0
    addPointsArtInt.innerText = 0            
}

    pass.addEventListener("click", clickPass)

