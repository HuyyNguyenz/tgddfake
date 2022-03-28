const cartInfoList = document.querySelector('.cart__info-list');
const cartContainer = document.querySelector('.cart-container');
const cartNull = document.querySelector('.cart-container--null');
const amount = document.querySelector('.header__mid-cart a > span');
const cart = document.querySelector('.ti-shopping-cart');
const cartShopping = document.querySelector('.header__mid-cart');

function renderCartInfo() {
    if (localStorage.length > 0) {
        cartNull.style.display = 'none';
        const myArray = [];
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).includes('product')) {
                amount.style.display = 'inline-block';
                amount.innerText = ++count;
                cartShopping.style.backgroundColor = 'rgba(255,255,255,0.4)';
                cart.style.display = 'none';
                const productList = JSON.parse(localStorage.getItem(localStorage.key(i)));
                myArray.push(productList);
            }
        }
        const htmls = myArray.map((items) => {
            const html = items.map((item) => {
                return `
                    <div class="cart__info">
                        <div class="cart__info-img">
                            <img src="${item.image}">
                            <a href="./cart.html" class="delete">
                                <span>Xóa</span>
                            </a>
                        </div>
                        <div class="cart__info-desc">
                            <div class="cart__info-name">
                                <h4>${item.name}</h4>
                            </div>
                            <div class="cart__info-price">
                                <p>${item.price}đ</p>
                            </div>
                            <div class="cart__info-amount">
                                <button class="decrease">
                                    <span>-</span>
                                </button>
                                <div class="amount">
                                    <span>1</span>
                                </div>
                                <button class="increase">
                                    <span>+</span>
                                </button>
                            </div>
                            <div class="cart__info-total">
                                <p data-price="${item.priceNumber}">
                                    Tổng: <span data-price="${item.priceNumber}">${item.price}đ</span>
                                </p>
                            </div>
                        </div>
                    </div>
                `
            }).join('');
            return html;
        })
        cartInfoList.innerHTML = htmls;

        // Xử lý khi click xóa
        deleteProduct();

        // Tăng giảm số lượng
        const decreaseBtn = document.querySelectorAll('.decrease');
        const increaseBtn = document.querySelectorAll('.increase');
        const number = document.querySelectorAll('.amount span');
        const cartInfoTotal = document.querySelectorAll('.cart__info-total > p');
        const totalPriceValue = document.querySelectorAll('.cart__info-total > p span');
        const totalPriceAllValue = document.querySelector('.cart__info-total--all span');
        decreaseNumber();
        increaseNumber();
        function decreaseNumber() {
            decreaseBtn.forEach((btn, index) => {
                btn.onclick = (() => {
                    if (Number(number[index].innerText) <= 1) {
                        number[index].innerText = 1;
                    }
                    else {
                        number[index].innerText = --number[index].innerText;

                        // Tính tổng số lượng của 1 sản phẩm
                        let totalPrice = cartInfoTotal[index].dataset.price;
                        totalPrice = Number(totalPrice) * Number(number[index].innerText);
                        totalPriceValue[index].innerText = `${totalPrice}đ`;
                        totalPriceValue[index].dataset.price = totalPrice;
                    }

                    // Tính số lượng có trong giỏ hàng
                    let totalAmount = 0;
                    for (let i = 0; i < number.length; i++) {
                        totalAmount += Number(number[i].innerText);
                    }
                    amount.innerText = totalAmount;

                    // Tính tổng all
                    let totalPriceAll = 0;
                    for (let i = 0; i < totalPriceValue.length; i++) {
                        totalPriceAll += Number(totalPriceValue[i].dataset.price);
                    }
                    totalPriceAllValue.innerText = `${totalPriceAll}đ`;
                })

                // Mới vào render ra tổng giá
                let totalPriceAll = 0;
                for (let i = 0; i < totalPriceValue.length; i++) {
                    totalPriceAll += Number(totalPriceValue[i].dataset.price);
                }
                totalPriceAllValue.innerText = `${totalPriceAll}đ`;
            })
        }
        function increaseNumber() {
            increaseBtn.forEach((btn, index) => {
                btn.onclick = (() => {
                    if (Number(number[index].innerText) >= 99) {
                        number[index].innerText = 99;
                    }
                    else {
                        number[index].innerText = ++number[index].innerText;

                        // Tính tổng số lượng của 1 sản phẩm
                        let totalPrice = cartInfoTotal[index].dataset.price;
                        totalPrice = Number(totalPrice) * Number(number[index].innerText);
                        totalPriceValue[index].innerText = `${totalPrice}đ`;
                        totalPriceValue[index].dataset.price = totalPrice;
                    }

                    // Tính số lượng có trong giỏ hàng
                    let total = 0;
                    for (let i = 0; i < number.length; i++) {
                        total += Number(number[i].innerText);
                    }
                    amount.innerText = total;

                    // Tính tổng all
                    let totalPriceAll = 0;
                    for (let i = 0; i < totalPriceValue.length; i++) {
                        totalPriceAll += Number(totalPriceValue[i].dataset.price);
                    }
                    totalPriceAllValue.innerText = `${totalPriceAll}đ`;
                })
            })
        }
    }
    else {
        cartNull.style.display = 'block';
        cartContainer.style.display = 'none';
        amount.style.display = 'none';
        cart.style.display = 'inline-block';
        cartShopping.style.backgroundColor = 'transparent';
    }
}

function deleteProduct() {
    const deleteBtn = document.querySelectorAll('.cart__info-img .delete');
    deleteBtn.forEach((btn, index) => {
        btn.onclick = (() => {
            localStorage.removeItem(localStorage.key(index));
        })
    })
}

renderCartInfo();