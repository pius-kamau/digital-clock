function updateClock() {
    const now = new Date();
    
    // Format time
    let hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Format date
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    
    // Update DOM
    document.getElementById('time').innerHTML = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}`;
    document.getElementById('date').textContent = `${day}, ${month} ${date}, ${year}`;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);