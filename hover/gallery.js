/*Name this external file gallery.js*/

function upDate(previewPic){
    //var src = previewPic.getAttribute( "src" );
    //document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    //document.getElementById('image').innerHTML = previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')";
    var alt = previewPic.getAttribute( "alt" );
    document.getElementById('image').innerHTML = alt;
}



function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";



}
function onClick(){
    //var points = new Array();
    var points=document.getElementById("first").value;
    //var person = ["abc"];
    document.getElementById("last").value=points;
}
