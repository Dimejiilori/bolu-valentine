const bgContainer = document.getElementById('bg-container');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('mainGif');
const successScreen = document.getElementById('successScreen');
const gifArea = document.querySelector('.gif-area');
const modeSelect = document.getElementById('modeSelect');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 10 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    bgContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 15000);
}
setInterval(createHeart, 600);

// -------- MODES --------
const modes = {
    soft: {
        gifs: [
            "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
            "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif",
            "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
        ],
        text: [
            "Are you sure BOLU? 🥺",
            "Think about us 😭",
            "My heart is fragile..."
        ]
    },
    chaotic: {
        gifs: [
            "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
            "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
            "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
        ],
        text: [
            "BOLU behave! 😭",
            "Why are you like this??",
            "This is wickedness 😂"
        ]
    },
    toxic: {
        gifs: [
            "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
            "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
            "https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif"
        ],
        text: [
            "BOLU no disgrace me 😤",
            "Village people are watching 👀",
            "So after everything?? 😭"
        ]
    }
};

let step = 0;

noBtn.addEventListener('click', () => {

    const selectedMode = modes[modeSelect.value];

    if (step < selectedMode.gifs.length) {
        mainGif.src = selectedMode.gifs[step];
    }

    if (step < selectedMode.text.length) {
        noBtn.innerText = selectedMode.text[step];
    }

    yesBtn.style.transform = `scale(${1 + step * 0.1})`;

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "1000";

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = Math.max(10, randomX) + 'px';
    noBtn.style.top = Math.max(10, randomY) + 'px';

    document.title = "BOLU don't break my heart 😭";

    step++;
});

yesBtn.addEventListener('click', () => {
    successScreen.innerHTML = `
        <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" class="main-gif" style="max-height:200px;">
        <div class="success-text">
            Cheers BOLU! 🥂<br> You just made my year.
        </div>
        <p style="color:#888; margin-top:15px;">February 14th is ours ❤️</p>
    `;
    successScreen.style.display = 'flex';
});
