export default function() {
  const container = document.querySelector(".slider__slides");
  const leftArr = document.querySelector(".slider__leftArrow");
  const rightArr = document.querySelector(".slider__rightArrow");
  let translate = 50;

  console.log(rightArr)

  rightArr.onclick = () => {
    // container.scrollLeft -= translate;
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        container.scrollLeft += translate;
        scrollAmount += 15;
        if(scrollAmount >= 100){
            window.clearInterval(slideTimer);
        }
    }, 25);
}

  leftArr.onclick = () => {
    // container.scrollLeft -= translate;
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        container.scrollLeft -= translate;
        scrollAmount += 15;
        if(scrollAmount >= 100){
            window.clearInterval(slideTimer);
        }
    }, 25);
}
}
