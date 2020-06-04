var sessionA = "25:00";
var BreakB = "10:00";
var work = sessionA;
var workInterval;
var BreakBInterval;
var play = false;
var sessionText = document.getElementById("session");
var BreakText = document.getElementById("Break");
var WorkText = document.getElementById("WORK");
sessionText.innerText = sessionA;
BreakText.innerText = BreakB;
WorkText.innerText = work;

function timers(time, value) {
    time = time.split(':');
    var min = parseInt(time[0]);
    var sec = parseInt(time[1]);
    sec = sec + value;
    if (sec < 0) {
        sec = 59;
        min = min - 1;
    } else {
        min = min + Math.floor(sec / 60);
        sec = sec % 60;
    }
    return min + ':' + sec;
}
document.getElementById("chevron-up").addEventListener('click', function() {
    sessionA = timers(sessionA, +25);
    sessionText.innerText = sessionA;
    work = timers(work, +25);
    WorkText.innerText = work;
})
document.getElementById("chevron-down").addEventListener('click', function() {
    sessionA = timers(sessionA, -25);
    sessionText.innerText = sessionA;
    work = timers(work, -25);
    WorkText.innerText = work;
})
document.getElementById("Break-up").addEventListener('click', function() {
    BreakB = timers(BreakB, +10);
    BreakText.innerText = BreakB;
})
document.getElementById("Break-down").addEventListener('click', function() {
    BreakB = timers(BreakB, -10);
    BreakText.innerText = BreakB;
})
document.getElementById('fa-play').addEventListener('click',
    function player() {
        play = !play;
        if (play) {
            workInterval = setInterval(function() {
                work = timers(work, -1);
                if (work == "0:0") {
                    clearInterval(workInterval)
                    alert("time of work is finish")
                }
                if (work == "0:0") {
                    BreakBInterval = setInterval(function() {
                        BreakB = timers(BreakB, -1);
                        BreakText.innerText = BreakB;
                        if (BreakB == "0:0") {
                            clearInterval(BreakBInterval)
                        }
                    }, 1000)
                }
                WorkText.innerText = work;
            }, 1000)
        } else {
            clearInterval(workInterval)
        }
    })
document.getElementById("fa-redo").addEventListener('click', function() {
    work = (work, sessionA);
    WorkText.innerText = work;
    clearInterval(workInterval)
})