
var modal = document.getElementById("modal");
var modal_img =  document.getElementById("modal-img");

function show_modal(img)
{
    var source = img.src;
    var ext;
    
    //find extension. Rename image to high res image name and
    //us that as the source.
    ext = source.slice(source.length - 4, source.length);
    source = source.slice(0, source.length - 4);
    source += "_l";
    source += ext;

    modal_img.src = source;
    modal.style.display = "block";

}

function close_modal()
{
    modal.style.display = "none";
}