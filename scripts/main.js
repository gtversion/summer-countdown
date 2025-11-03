let targetStartDate = new Date();
let targetText = "";

function updateCountDown() {
    
    const timeContainerEl = document.querySelector('.js-time-here');
    const now = new Date();

    let diffMs = targetStartDate - now; // difference in milliseconds
    const diffHours = (Math.floor(diffMs / (1000 * 60 * 60))).toString().padStart(2, '0');
    diffMs -= diffHours * (1000 * 60 * 60);

    const diffMinutes = (Math.floor(diffMs / (1000 * 60))).toString().padStart(2, '0');
    diffMs -= diffMinutes * (1000 * 60);

    const diffSeconds = (Math.floor(diffMs / 1000)).toString().padStart(2, '0');

    timeContainerEl.innerHTML = `${diffHours}:${diffMinutes}:${diffSeconds}`;
}

function updateText() {
    const textContainerEl = document.querySelector(".js-text-here")

    if (textContainerEl) {
        textContainerEl.innerHTML = targetText
    }
}

function setTargets() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    if (month > 8 || month < 6) {
        targetStartDate = new Date(`${year + 1}-06-01T00:00:00`);
        targetText = "left until next summer";
    } else {
        targetStartDate = new Date(`${year}-09-01T00:00:00`)
        targetText = "left before the end of the summer"
    }
}

setTargets()
updateText()
updateCountDown();

setInterval(updateCountDown, 1000);
