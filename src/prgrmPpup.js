
// =====Popup
window.addEventListener('DOMContentLoaded', () => {
    const popUp = document.querySelector('#popUp'); 
    const toolTip = document.querySelector('#toolTip');

    popUp.addEventListener('mouseenter', () => {
        toolTip.classList.remove('hidden');
    })

    popUp.addEventListener('mouseleave', () => {
        toolTip.classList.add('hidden');
    })
})

// Client Say

let slideBar = document.querySelector('#slideBar');
let slider = document.querySelector('#slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 2;
if(document.body.clientWidth<1280){
    elementsToShow = 1;
}

let sliderContainerWidth = slideBar.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';   
}

function prev(){
    if(+slider.style.marginLeft.slice(0,-2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px'; //100px
}

function next(){
    if(+slider.style.marginLeft.slice(0,-2) !=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px'; //100px
}


// let isDragStart = false;

// const dragStart = () => {
//     isDragStart = true;
// }

// const dragging = (e) => {
//     if(isDragStart) return;
//     slideBar.scrollLeft = e.pageX;
// }

// slideBar.addEventListener('mousedown', dragStart);
// slideBar.addEventListener('mousemove', dragging);