const timeContainerEl = document.querySelector('.js-time-here');
const targetDate = new Date('2026-06-01T00:00:00');

function updateCountDown() {

    const now = new Date();

    let diffMs = targetDate - now; // difference in milliseconds
    const diffHours = (Math.floor(diffMs / (1000 * 60 * 60))).toString().padStart(2, '0');
    diffMs -= diffHours * (1000 * 60 * 60);

    const diffMinutes = (Math.floor(diffMs / (1000 * 60))).toString().padStart(2, '0');
    diffMs -= diffMinutes * (1000 * 60);

    const diffSeconds = (Math.floor(diffMs / 1000)).toString().padStart(2, '0');

    timeContainerEl.innerHTML = `${diffHours}:${diffMinutes}:${diffSeconds}`;

    // timeContainerEl.classList.remove('digit-change');
    // void timeContainerEl.offsetWidth; // reflow to restart animation
    // timeContainerEl.classList.add('digit-change');

}

updateCountDown();
setInterval(updateCountDown, 1000);