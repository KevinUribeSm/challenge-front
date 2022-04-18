const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

function getProducts() {
    const res = fetch('hhttps://server-bsale.herokuapp.com/api/products/vodka');
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
