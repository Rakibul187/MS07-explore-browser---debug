const getInputValueById = id => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field')
    localStorage.setItem(product, quantity)

    addProductToDisplay(product, quantity)
    saveItemToLocalStorage(product, quantity)
}

const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart')
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart)
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}


const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();

    for (const product in cart) {
        const quantity = cart[product]
        console.log(product, quantity)
        addProductToDisplay(product, quantity)
    }
}
displayStoredProduct()

// conceptual 1