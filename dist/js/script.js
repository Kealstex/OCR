function showMenu() {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function upload() {
    var image = document.getElementById("canvas1");
    var fileinput = document.getElementById("imageOCR");
    var dnd = document.getElementById("drag-and-drop");
    image.classList.remove("d-none");
    image.src = URL.createObjectURL(fileinput.files[0]);
    dnd.classList.add("d-none");
    var hint = document.getElementById("hint");
    hint.style.width = image.offsetWidth + "px";
    hint.classList.remove("d-none");
    hint.innerHTML = "Files upload!";
}

function urlUpload() {
    var url = document.getElementById("start").value;
    console.log(url.length);
    if (url.length > 0) {
        var image = document.getElementById("canvas1");
        var dnd = document.getElementById("drag-and-drop");
        image.src = url;
        image.classList.remove("d-none");
        dnd.classList.add("d-none");
        hint.style.width = image.offsetWidth + "px";
        hint.classList.remove("d-none");
        hint.innerHTML = "Files upload!";
    }
}