
let see = document.getElementById("image"); 
let imgs = ['bitcoin img 3.jpg', 'bitcoin img 2.jpg','bitcoin img 1.jpg'];
let index = 0
see.src = imgs[index] 




function next() {
    if (index==imgs.length-1) {
        index = 0
    } else {
        index ++
    }
    see.src = imgs[index] 
}

function prev() {
    if (index==0) {
        index = imgs.length -1
    } else {
        index --
    }
    see.src = imgs[index] 
}