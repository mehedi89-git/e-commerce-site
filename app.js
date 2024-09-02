const products = [
   {
        id: 1,
        name: 'Gaming Laptop',
        price: 1500,
        image: 'http://via.placeholder.com/150',
        categories: ['Laptop', 'Gaming']
   },
   {
    id: 2,
        name: 'Wirless Mouse',
        price: 50,
        image: 'http://via.placeholder.com/150',
        categories: ['Accessories', 'peripherals']
   },
   
];

function removeProductFromCart(productId) {
    const productIndex = cart.findIndex(function (product) {
        return product.id === productId
    });

    if (productIndex === -1) {
        alert('Product is not in the cart!!!')
        return;
    }

    cart.splice(productIndex, 1);
    renderCart();
}

let cart = [];
function renderCart() {
    const cartItemList = document.getElementById('cart-items')
    cartItemList.innerHTML = '';
    cart.forEach (function(product) {
        
        const cartItemElement = document.createElement('li');
        cartItemElement.innerText = `${product.name} - $${product.price} x ${1}`;

        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        removeBtn.classList.add('text-red-500', 'ml-2')
        removeBtn.addEventListener('click', function () {
            removeProductFromCart(product.id);
        })
        cartItemElement.appendChild(removeBtn)

        cartItemList.appendChild(cartItemElement)
    });
}


function getProductImage(product) {
    const productImage = document.createElement('img')
    productImage.src = product.image
    productImage.alt = product.name
    productImage.classList.add('w-full', 'mb-4')
    return productImage;
}

function getProductNameElement(productName) {
    const productNameElement = document.createElement('h3') 
    productNameElement.innerText = productName
    productNameElement.classList.add('text-lg', 'font-semibold')
    return productNameElement;
}

function getProductPriceElement(productPrice) {
    const getProductPriceElement = document.createElement('p')
    getProductPriceElement.textContent = `$${productPrice}`
    getProductPriceElement.classList.add('text-gray-700')
    return getProductPriceElement 
}

function getAddToCartButton(product) {
    const addToCartButton = document.createElement('button')
    addToCartButton.textContent = 'Add to cart';
    addToCartButton.classList.add(
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
        'mt-2',
    );
    addToCartButton.addEventListener('click', function () {
        cart.push(product);
        renderCart();
    });
    
    return addToCartButton;
}

function getproductCard(product) {
    const card = document.createElement('div')
    card.classList.add('bg-white', 'p-4', 'rounded', 'shadow')

    const productImage = getProductImage(product)
    card.appendChild(productImage)

    const productName = getProductNameElement(product.name)
    card.appendChild(productName)

    const productPrice = getProductPriceElement(product.price)
    card.appendChild(productPrice);

    const addToCartButton = getAddToCartButton (product)
    card.appendChild(addToCartButton);

    return card;
}


function renderProducts () {
    const productlistContainer = document.getElementById("product-list");
    productlistContainer.innerHTML = '';
    products.forEach(function (product) {
        const productCard = getproductCard(product);
        productlistContainer.appendChild(productCard);
    });
}

function renderCategories() {
    const categoryContianer = document.getElementById('category-filters')
    categoryContianer.innerHTML = '';

    const categories = getProductCategories();
    categories.forEach(function (category) {
        const categoryBtn = category // change it
        categoryContianer.appendChild(categoryBtn)
    });

}

renderProducts();
renderCategories();