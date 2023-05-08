var backgroundImgStart, backgroundImgPlay, backgroundImgEnd, gameState;

function upload() {
    backgroundImgStart = loadImage("backgroundCodingStart.jpeg")
    backgroundImgEnd = loadImage("card1.png")
    backgroundImgPlay = loadImage("card.png");
    sound = new Audio("New Recording 24.m4a")
    endSound = new Audio("Rishik Music 3.m4a")

}

function up() {
    createCanvas(windowWidth, windowHeight)
    gameState = 1

}

function gameStart(width, height) {
    if (gameState == 1) {
        image(backgroundImgStart, 0, 0, width * 1.5, innerHeight * 1.5)
        textSize(30)
        fill("blue")
        textFont("Times New Roman")

        text("Please read the card made by Rishik Goenka.", 10, 30)
        text("Press the right arrow to get to the card!", 10, 60)
        if (keyIsDown(RIGHT_ARROW)) {
            gameState = 2
        }


    }
}

function gamePlay() {
    if (gameState == 2) {
        image(backgroundImgPlay, 0, 0, width, innerHeight)
        
        sound.play()

        setTimeout(() => {
           gameState = 3
        },24100)
    }
}

    function gameEnd() {
        if (gameState == 3) {
            image(backgroundImgEnd, 0, 0, width, innerHeight)
            sound.pause()
            endSound.play()
            endSound.loop = false
        }
    }