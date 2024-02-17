const day = new Date();
document.querySelector('.time__display').innerHTML = day;

let changedMinutes = 3;
let changedSeconds = 3;
let changedHours = 3;

document.querySelector('.change__seconds').onclick = () => {
    getTimeWithChangedSeconds();
    
}

function getTimeWithChangedSeconds() {
    let t = new Date(Date.now() + (changedSeconds * 1000))
    document.querySelector('.time__display').innerHTML = t;

}

document.querySelector('.change__minutes').onclick = () => {
    getTimeWithChangedMinutes();
    
}

function getTimeWithChangedMinutes() {
    let t = new Date(Date.now() + (changedMinutes * 1000) * 60)
    document.querySelector('.time__display').innerHTML = t;
}

document.querySelector('.change__hours').onclick = () => {
    getTimeWithChangedHours();
    
}

function getTimeWithChangedHours() {
    let t = new Date(Date.now() + (changedHours * 1000) * 3600); 
    document.querySelector('.time__display').innerHTML = t;
}