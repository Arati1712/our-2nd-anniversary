// OUR 2ND ANNIVERSARY WEBSITE ❤️

// ALL QUESTIONS
const questions = [
    "Babyyy... How much do you love me? ❤️",
    "Babyyy... Can we recreate our first kiss? 💋",
    "Babyyy... Let's go for a date tomorrow! 🥹",
    "Babyyy... You have to say I LOVE YOU 50 times! 💗",
    "Babyyy... Will you marry me? 💍"
];

let currentQuestion = 0;
let loveCount = 0;


// SCREEN NAVIGATION
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// START BUTTON
document.getElementById("startBtn").addEventListener("click", function () {
    currentQuestion = 0;
    loadQuestion();
    showScreen("quiz");
});


// LOAD QUESTIONS
function loadQuestion() {
    document.getElementById("questionText").textContent =
        questions[currentQuestion];

    document.getElementById("currentQuestion").textContent =
        currentQuestion + 1;

    document.getElementById("progressBar").style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    document.getElementById("questionMessage").textContent = "";

    noBtn.style.transform = "translate(0, 0)";
}


// YES BUTTON
document.getElementById("yesBtn").addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScreen("challenge");
    }
});


// NO BUTTON
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const x = Math.random() * 90 - 45;
    const y = Math.random() * 50 - 25;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    document.getElementById("questionMessage").textContent =
        "Hehe babyyy! NO is not allowed! Choose YES! 😜❤️";
}

noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);


// 50 TIMES I LOVE YOU CHALLENGE
document.getElementById("loveBtn").addEventListener("click", function () {
    if (loveCount < 50) {
        loveCount++;
    }

    document.getElementById("loveCount").textContent =
        loveCount + " / 50";

    if (loveCount === 50) {
        document.getElementById("challengeMessage").textContent =
            "Awww! I LOVE YOU TOO, MY NETFLIX! 😭❤️";

        document.getElementById("loveBtn").textContent =
            "Completed! 💗";

        setTimeout(function () {
            showScreen("memories");
        }, 1800);

    } else {
        document.getElementById("challengeMessage").textContent =
            "Awww! " + loveCount + " times! Keep going babyyy! 🥹";
    }
});


// PHOTO SLIDESHOW ❤️
const photos = [
    "photos/photo1.jpeg",
    "photos/photo2.jpeg",
    "photos/photo3.jpeg",
    "photos/photo4.jpeg",
    "photos/photo5.jpeg",
    "photos/photo6.jpeg",
    "photos/photo7.jpeg",
    "photos/photo8.jpeg",
    "photos/photo9.jpeg",
];

let photoIndex = 0;

const slideshowImage = document.getElementById("slideshowImage");
const photoCounter = document.getElementById("photoCounter");

function showPhoto() {
    slideshowImage.src = photos[photoIndex];

    photoCounter.textContent =
        `Memory ${photoIndex + 1} / ${photos.length}`;
}

document.getElementById("nextPhoto").addEventListener("click", function () {
    photoIndex = (photoIndex + 1) % photos.length;
    showPhoto();
});

document.getElementById("prevPhoto").addEventListener("click", function () {
    photoIndex = (photoIndex - 1 + photos.length) % photos.length;
    showPhoto();
});

setInterval(function () {
    photoIndex = (photoIndex + 1) % photos.length;
    showPhoto();
}, 3000);

showPhoto();


// OPEN MY LETTER 💌
document.getElementById("letterBtn").addEventListener("click", function () {
    showScreen("letter");
});


// FINAL SURPRISE ❤️
document.getElementById("finalBtn").addEventListener("click", function () {
    showScreen("final");
});