// Get username from session
const session = JSON.parse(localStorage.getItem("crm_session"));

if (session) {
    const name = session.fullName;
    
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    document.querySelector(".user-name").textContent = formattedName;
}

// Live clock
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("clock").textContent = time;
}

// update immediately
updateClock();

// update every second
setInterval(updateClock, 1000);