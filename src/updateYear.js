export default function() {
    const copyright = document.querySelector('.copyright');

    const year = new Date().getFullYear()

    copyright.innerHTML = `<p><b>©${year} Zonex All rights reserved</b></p>`;
}