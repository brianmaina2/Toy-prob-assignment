
function checkSpeedCar(speedCar) {
    if (speedCar <= 70) {
        return "OK"
    } else if (speedCar <= 130) {
        return ((speedCar - 70) / 5) + " dimerit points "
    } else {
        return "License suspended"
    }
}
function handleClick(event) {
    let speed = parseInt(document.getElementById("Speed").value)
    if (speed !== undefined){
        let message = checkSpeedCar(speed)
    document.getElementById("Message").textContent=message
    }
}
