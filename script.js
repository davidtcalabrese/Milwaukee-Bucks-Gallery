// pics = document.querySelectorAll(".gallery__item");

// pics.forEach((pic) => {
//     pic.addEventListener("mouseenter", (e) => {
//         console.log(e);

//         pic.style.background = "#8e68ff";
//     })
// });

const zoomIn = () => {
    let myImg = document.querySelector(".gallery__item--5");
    let currWidth = myImg.clientWidth;
    if (currWidth == 500) {
        alert('Max zoom in reached');
    } else {
        myImg.style.width = (currWidth + 50) + "px";
    }
}