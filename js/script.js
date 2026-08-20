const cartCount = document.querySelector('#cart-count');

document.querySelectorAll('.add-button').forEach((button) => {
    button.addEventListener('click', () => {
        cartCount.textContent = Number(cartCount.textContent) + 1;
        button.classList.add('added');
        button.innerHTML = 'Added to basket <span>✓</span>';
        setTimeout(() => button.classList.remove('added'), 900);
    });
});
