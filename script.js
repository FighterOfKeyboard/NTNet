var image = document.querySelector('.image');
var bar = document.querySelector('.bar');
var sideBar = document.querySelector('.side-bar');
var sideBarList = document.querySelectorAll('.side-bar ul li');
var i = 0;
var images = new Array() // create new array to preload images
images[0] = new Image() // create new instance of image object
images[0].src = "1.png" // set image src property to image path, preloading image in the process
images[1] = new Image()
images[1].src = "2.png"
images[2] = new Image()
images[2].src = "3.png"

var time = 10000;

function toggleText(id)
 {
    x = id.getAttribute("id");

    var holder = document.querySelectorAll('.holder');
    var hid = document.getElementsByClassName("holder");
    // Emulates jQuery $(element).is(':hidden');
    for (i = 0; i < holder.length; i++) {
        hid[i].style.display = "none";
      }
        
        hid[x].style.display = "block";

}

function untoggleText(id)
{
    var hid = document.getElementsByClassName("holder");
    for (var i=0;i<hid.length;i+=1){
        hid[i].style.display = "none";
    }
}
//renamed toggle function to toggleImage
function toggleImage(e)
{
    var source = e.getAttribute('data-image');
    
    image.src = source;
}

function autoslide()
{
     //if browser does not support the image object, exit.
    if (!document.images){
        return
    }


    document.getElementById("slide").src = images[i].src
    

    if (i < images.length -1) {
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("autoslide()", time);
}

window.onload = autoslide;


var j = 0;

bar.addEventListener('click', function(){
    sideBar.classList.toggle('side-bar-js');

    if(j==0){
        bar.setAttribute('class', 'fas fa-times bar');
        j = 1;
    } else {
        bar.setAttribute('class', 'fas fa-bars bar');
        j = 0;
    }
    sideBarList.forEach(function(links){
        links.classList.toggle('sideBarList-js');
    });
});