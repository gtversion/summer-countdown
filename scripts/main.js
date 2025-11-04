let targetStartDate = new Date();
let targetText = "";
const timeContainerEl = document.querySelector('.js-time-here');

function timeCicle() {
    setTargets()
    updateText()
    updateCountDown();
}

function updateCountDown() {

    const now = new Date();

    let diffMs = targetStartDate - now; // difference in milliseconds
    const diffHours = formatString((Math.floor(diffMs / (1000 * 60 * 60))));
    diffMs -= diffHours * (1000 * 60 * 60);

    const diffMinutes = formatString((Math.floor(diffMs / (1000 * 60))));
    diffMs -= diffMinutes * (1000 * 60);

    const diffSeconds = formatString((Math.floor(diffMs / 1000)));

    timeContainerEl.innerHTML = `${diffHours}:${diffMinutes}:${diffSeconds}`;
}

function formatString(value) {
    return value.toString().padStart(2, '0');
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

    targetText = "left until the next summer";
    
    if (month > 8) {
        targetStartDate = new Date(`${year + 1}-06-01T00:00:00`);
    } else if (month < 6) {
        targetStartDate = new Date(`${year}-06-01T00:00:00`);
    } else {
        targetStartDate = new Date(`${year}-09-01T00:00:00`)
        targetText = "left before the end of this summer"
    }
}

setInterval(timeCicle, 1000);
