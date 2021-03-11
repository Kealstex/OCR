let image = document.getElementById("canvas1");
let fileinput = document.getElementById("imageOCR");
let dnd = document.getElementById("drag-and-drop");
let hint = document.getElementById("hint");
let btnRestart = document.getElementById("btnRestart");
let menu = document.getElementById('mobile-menu');

function showMenu() {
    menu.classList.toggle('hidden');
}

function upload() {
    image.classList.remove("d-none");
    image.src = URL.createObjectURL(fileinput.files[0]);
    dnd.classList.add("d-none");
    hint.style.width = image.offsetWidth + "px";
    hint.classList.remove("d-none");
    btnRestart.classList.remove("d-none");
    hint.innerHTML = "Files upload!";
}

function urlUpload() {
    let url = document.getElementById("start").value;
    console.log(url.length);
    if (url.length > 0) {
        image = document.getElementById("canvas1");
        dnd = document.getElementById("drag-and-drop");
        image.src = url;
        image.classList.remove("d-none");
        dnd.classList.add("d-none");
        hint.style.width = image.offsetWidth + "px";
        hint.classList.remove("d-none");
        hint.innerHTML = "Files upload!";
        btnRestart.classList.toggle("d-none");
    }
}

function restart() {
    image.classList.add("d-none");
    dnd.classList.remove("d-none");
    hint.classList.add("d-none");
    btnRestart.classList.add("d-none");
}