/*image rendering*/
function imageRender(imgFiles) {
    if(!renderImages) return;
    for(var i=0; i<imgFiles.length; i++)
        document.getElementsByTagName('img')[i].src = imgFiles[i];
}