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
}
