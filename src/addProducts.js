export default function() {

    const grid = document.querySelector('.new__grid');
    const newBtn = document.querySelector('.new__btn');

    let clicked = false;

    const ADDITIONAL_PRODUCTS = [
        {
            src: "https://via.placeholder.com/309x390",
            name: 'Big Hat',
            prize: '$29.00'
        },
        {
            src: "https://via.placeholder.com/309x390",
            name: 'Little Hat',
            prize: '$29.00'
        },
        {
            src: "https://via.placeholder.com/309x390",
            name: 'Glasses',
            prize: '$19.00'
        },
        {
            src: "https://via.placeholder.com/309x390",
            name: 'T-shirt',
            prize: '$49.00'
        },
    ];

    newBtn.addEventListener('click', addProduct);

    function addProduct () {
        if (clicked) return;

        clicked = true;

        for (let i=0; i<ADDITIONAL_PRODUCTS.length; i++) {
            let div = document.createElement('div');
            div.classList.add('new__item');

            let img = document.createElement('img');
            img.classList.add('new__img')
            img.src = ADDITIONAL_PRODUCTS[i].src;

            let icon = document.createElement('p');
            icon.classList.add('bold')
            let span = document.createElement('span');
            let iconImg = document.createElement('img');
            iconImg.src = 'assets/fb466bacd2b1d7de6ca1be0fe31df798.svg';
            span.appendChild(iconImg);
            icon.appendChild(span);
            let text = document.createTextNode(" New");
            icon.appendChild(text);

            let name = document.createElement('p');
            name.innerText = ADDITIONAL_PRODUCTS[i].name;

            let prizeDiv = document.createElement('div');
            prizeDiv.classList.add('new__price');
            prizeDiv.classList.add('bold');

            let prize = document.createElement('p');
            prize.classList.add('new__price--default');
            prize.innerText = ADDITIONAL_PRODUCTS[i].prize;

            let addToCart = document.createElement('p');
            addToCart.innerText = 'Add to cart';
            addToCart.classList.add('new__price--hover');

            let prizeSpan = document.createElement('span');
            let prizeIcon = document.createElement('img');
            let prizeIconSec = document.createElement('img');
            prizeIcon.src = 'assets/9ef4929d09df29ff3a001987ec297b1c.svg';
            prizeIconSec.src = 'assets/c2237729a5ec4bb86b7d86475643e097.svg';
            prizeSpan.appendChild(prizeIcon);
            prizeSpan.appendChild(prizeIconSec);
            addToCart.appendChild(prizeSpan);

            prizeDiv.appendChild(prize);
            prizeDiv.appendChild(addToCart);         

            div.appendChild(img);
            div.appendChild(icon);
            div.appendChild(name);
            div.appendChild(prizeDiv);

            grid.appendChild(div);

            newBtn.style.display= 'none';
            grid.style.marginBottom = '50px';
        }
    }
}