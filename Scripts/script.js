var zentri = document.getElementById("zentri");
var nav = document.getElementById("nav");

zentri.addEventListener("mouseenter", orange);
zentri.addEventListener("mouseleave",purple);

function orange(evt)
{  
    evt.target.style.backgroundColor = "#EF5F22";
}
function purple(evt)
{
    evt.target.style.backgroundColor = '#622A84';
}