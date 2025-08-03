// DIGITAL CLOCK PROGRAM

function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const isPM = hours >= 12 ? 'PM' : 'AM';
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${isPM}`;
    document.getElementById('clock').textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);   // Initial call to display clock immediately