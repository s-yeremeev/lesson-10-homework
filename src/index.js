
const newCard = document.getElementById("newCard")
const pass = document.getElementById("pass")

    const clickNewCard = function (event) {
            event.preventDefault()           

            const addPointsPlayer = document.getElementById("pointsPlayer")
            let pointPlayer = Math.floor(Math.random() * (11 - 1) + 1)
            let inerPlayer = +addPointsPlayer.innerText
            addPointsPlayer.innerText = inerPlayer + pointPlayer
            

            const addPointsArtInt = document.getElementById("pointsArtInt")
            let pointArtInt = Math.floor(Math.random() * (11 - 1) + 1)
            let inerArtInt = +addPointsArtInt.innerText
            addPointsArtInt.innerText = inerArtInt + pointArtInt            
        }
        newCard.addEventListener("click", clickNewCard)



        const clickPass = function (event) {
            event.preventDefault()
            
            const addPointsPlayer = document.getElementById("pointsPlayer")
            const inerPlayer = +addPointsPlayer.innerText
            const addPointsArtInt = document.getElementById("pointsArtInt")
            let inerArtInt = +addPointsArtInt.innerText

            if (inerArtInt <= 19) {
                console.log("ku")
                let pointArtInt = Math.floor(Math.random() * (11 - 1) + 1)                
                addPointsArtInt.innerText = inerArtInt + pointArtInt
                inerArtInt = +addPointsArtInt.innerText
            }
            

            const checkPoints = inerPlayer >= inerArtInt
            const checkMaxPlayer = inerPlayer >= 22
            const checkMaxArtInt = inerArtInt >= 22

             if(checkMaxPlayer) alert("You lose. You have " + addPointsPlayer.innerText + " points")
                else if (checkMaxArtInt) alert("You won. Your opponent scored " + addPointsArtInt.innerText + " points")
                else 
                  if(checkPoints) alert("You won.\nYou typed: " + addPointsPlayer.innerText + "\nYour opponent type: " + addPointsArtInt.innerText)
                       else alert("You lose.\nYou typed: " + addPointsPlayer.innerText + "\nYour opponent type: " + addPointsArtInt.innerText)
          
                      
            addPointsPlayer.innerText = 0
            addPointsArtInt.innerText = 0            
        }

        pass.addEventListener("click", clickPass)

