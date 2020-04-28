
export default function() {
    const upButton = document.querySelector(".upBtn");
    const halfWindowHeight = window.innerHeight/2;
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > halfWindowHeight || document.documentElement.scrollTop > halfWindowHeight) {
            upButton.style.display = "block";
        } else {
            upButton.style.display = "none";
        }
    })

    upButton.addEventListener('click', () => {
        document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          }); 
    });
}