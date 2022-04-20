const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

// api consume
function getProducts() {
    const res = fetch('https://server-bsale.herokuapp.com/api/products');
    return res;
}

getProducts()
    .then(product => product.json())
    .then(data => {
        var arr = data.product
        arr.forEach(element => {
            templateCard.querySelector('h5').textContent = element.name
            templateCard.querySelector('p').textContent = '$' + element.price
            templateCard.querySelector('img').setAttribute('src', element.url_image)
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
    });


// search
addEventListener('keyup', e => {
    try {
        if (e.target.matches('#search')) {
            let titles = document.querySelectorAll('#items > div');

            for (let title of titles) {
                title.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                    ? title.classList.remove('filtro')
                    : title.classList.add('filtro')
            }
        }
    } catch (error) {
        console.log(error)
    }
});

