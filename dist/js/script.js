function showMenu() {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function upload() {
    var imgcanvas = document.getElementById("canvas1");
    imgcanvas.classList.toggle("d-none");
    alert(imgcanvas);
    var fileinput = document.getElementById("imageOCR");
    alert(fileinput);
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
    //alert("Upload image " + filename);
}
