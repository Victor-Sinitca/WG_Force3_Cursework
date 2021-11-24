import {moveProduct} from "./moveProduct"


const productData = [
    {
        productDescription: {
            span: "1",
            name: "ИС-64",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 1,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 2,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 3,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 4,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 5,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 6,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 7,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 8,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 9,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 10,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 11,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 12,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-6",
            type: "",
            country: "",
            description: "Premium Account allows to research desirable vehicles quicker and to save time on its purchase. It gives more Credits and Experience per battle.  It is a great deal as the profit after paying for repairs and ammo increases two- or threefold, depending on your performance in battle (amount of damage, destroyed enemies, base captured/defended, " +
                "enemies detected, etc).",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 13,
    }
]
const userDate = {
    wishlist: [],
    shopping: [],
}
const errorMessage = "передан недействительный идентификатор продукта"
function createError(massage, data) {
    return {
        massage,
        data
    }
}
class Item {
    #productData = []
    #userDate = {
        wishlist: [],
        shopping: [],
    }
    setData() {
        //добавить запрос на сервер дляполучения данных
        this.#productData = productData
        this.#userDate = userDate
    }
    shoppingChange(shoppingData = null, deleteValue = false) {
        const $shopping = document.getElementById("shoppingId")
        if (!shoppingData) {
            // GET запрос на сервер
            // this.#userDate.wishlist = response.data (userDate.shopping)
            //заглушка
            this.#userDate.shopping = userDate.shopping
            $shopping.innerText = `(${this.#userDate.shopping.length})`
            return
        }
        if (deleteValue) {
            // DELETE запрос на сервер {deleteShopping:newValue}
            // this.#userDate.shopping = response.data

            //заглушка
            this.#userDate.shopping = this.#userDate.shopping.filter(value =>
                value.productID !== productData.productID)

            $shopping.innerText = `(${this.#userDate.shopping.length})`
            return
        }

        // POST запрос на сервер {newWishlist:newValue}
        // this.#userDate.shopping = response.data

        //заглушка
        this.#userDate.shopping.push(shoppingData)

        $shopping.innerText = `(${this.#userDate.shopping.length})`
    }
    createItem(itemId) {
        const $container = document.getElementsByClassName(`mainContainer`)
        let itemData = this.#productData.filter((product) => product.productID === itemId)
        const $item = document.createElement('main');
        $item.classList.add('mainItemContent')
        if (!itemData.length) {
            $item.innerHTML = `<p style="min-height: 100vh">Продукт не найден</p>`
            $container[0].append($item)
            throw createError(errorMessage,itemId)
        }
        itemData = itemData[0]
        $item.innerHTML = `
            <h2>${itemData.productDescription.name}</h2>
            <img src=${itemData.productImage} alt="${itemData.productDescription.name}"/>
            <div class="purchaseContainer">
                <span class="priceItem">${itemData.productCost}</span>
                <button class="purchaseButton">purchase</button>
            </div>
            <p class="itemDescription">${itemData.productDescription.description}</p>`

        const $button = $item.querySelector("button")
        const $img = $item.querySelector("img")
        $button.addEventListener("click", (event) => {
            moveProduct($img,"shoppingId","bodyId","moveProductItem")
            this.shoppingChange(itemData)
        }, false)
        $container[0].append($item)
    }
}


const item= new Item()
item.setData()
item.createItem(2)
