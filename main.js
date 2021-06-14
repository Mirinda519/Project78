var images=["butterfly.jpg","lion.jpg","shark.jpg","unicorn-700x467.jpg"];
var names=["Butterfly", "Lion", "Shark", "Unicorn"];
var i=0;
function update()
{
document.getElementById("family").src=images[i];
document.getElementById("family_names").innerHTML=names[i];
i++;
if(i>=4)
{
    i=0;
}
}