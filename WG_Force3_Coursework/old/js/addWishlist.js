import {moveProduct} from "./moveProduct"

const country = ["china", "czech", "france", "germany", "italy", "japan", "poland", "sweden", "uk", "usa", "ussr"]
const type = ["AT-SPG", "heavyTank", "lightTank", "mediumTank", "SPG"]
const productData = [
    {
        productDescription: {
            span: "1",
            name: "ИС-64",
            type: "AT-SPG",
            country: "china",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 1,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-6",
            type: "heavyTank",
            country: "czech",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 2,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-62",
            type: "lightTank",
            country: "france",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 3,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-63",
            type: "mediumTank",
            country: "germany",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 4,
    },
    {
        productDescription: {
            span: "2",
            name: "ИС-64",
            type: "SPG",
            country: "italy",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 5,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-65",
            type: "SPG",
            country: "japan",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 6,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-66",
            type: "mediumTank",
            country: "poland",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 7,
    },
    {
        productDescription: {
            span: "1",
            name: "ИС-67",
            type: "mediumTank",
            country: "sweden",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 8,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-68",
            type: "mediumTank",
            country: "uk",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 9,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-69",
            type: "mediumTank",
            country: "usa",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 10,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-655",
            type: "mediumTank",
            country: "ussr",
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
            type: "mediumTank",
            country: "ussr",
        },
        productImage: "https://ru-wotp.wgcdn.co/dcont/fb/image/r165_object_703_ii_1300_big_1.png",
        productCost: "$ 58.99",
        productID: 12,
    }
    ,
    {
        productDescription: {
            span: "1",
            name: "ИС-64",
            type: "mediumTank",
            country: "ussr",
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


class Wishlist {
    #productData = []
    #userDate = {
        wishlist: [],
        shopping: [],
    }

    setData() {
        //добавить запрос на сервер дляполучения данных
        this.#productData = productData
    }

    wishlistChange(wishlistData = null) {
        const $wishlist = document.getElementById("wishlistId")
        //инициализация списка любимых товаров
        if (!wishlistData) {
            // GET запрос на сервер
            // this.#userDate.wishlist = response.data

            //заглушка логики сервера
            this.#userDate.wishlist = userDate.wishlist

            $wishlist.innerText = `(${this.#userDate.wishlist.length})`
            return
        }

        // PUT запрос на сервер {wishlist:wishlistData}
        // this.#userDate.wishlist.=response.data

        //заглушка логики сервера
        const filterWishlist = this.#userDate.wishlist.filter(value => value.productID !== wishlistData.productID)
        if (filterWishlist.length === this.#userDate.wishlist.length) {
            this.#userDate.wishlist.push(wishlistData)
        } else {
            this.#userDate.wishlist = filterWishlist
        }

        $wishlist.innerText = `(${this.#userDate.wishlist.length})`
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

    createProduct($parent, productData) {
        const $product = document.createElement("div")
        $product.classList.add('product')
        $product.innerHTML = `
                <a href="http://localhost:3000/html/item.html">
                    <img class="imgBG" src="assets/images/Layer40.svg" alt="Танк">
                    <div class="description">
                        <div class="description_Product">
                            <span class="description_flag" data-country="${productData.productDescription.country}">
                                    ${productData.productDescription.country}
                            </span>
                            <span class="description_typ" data-type="${productData.productDescription.type}">
                                    ${productData.productDescription.type}
                            </span>
                            <h2>${productData.productDescription.name}</h2>
                        </div>
                        <span class="description_price">$ 58.99</span>
                    </div>
                </a>
                <button id="wishButton" class="description_button">purchase</button>
                <button class="like likeNotActive">Поставить лайк</button>
    `
        $product.style.gridColumn = `span ${productData.productDescription.span}`;
        $product.style.paddingBottom = `${100 / productData.productDescription.span}%`;
        const $button = $product.querySelectorAll("button")
        const $likeButton = $button[1]
        const $purchaseButton = $button[0]

        //добавление товара в карзину
        $purchaseButton.addEventListener("click", (event) => {
            //выполнене анимации добавления товара
            moveProduct($product, "shoppingId", "bodyId", "productMoveStyle",
                [
                    {name: "paddingBottom", property: "0px"}
                ])
            //добавление товара в карзину и изменение счетчика добавленных товаров
            this.shoppingChange(productData)
        }, false)

        //поиск любимого товара в списке  и установка состояния лайк/нелайк
        this.#userDate.wishlist.forEach(value => {
            if (value.productID === productData.productID) {
                $likeButton.classList.remove("likeNotActive")
                $likeButton.classList.add('likeActive')
            }
        })

        // изменение состояния лайк/нелайк
        $likeButton.addEventListener("click", (event) => {
            // изменение списка любимых товаров
            this.wishlistChange(productData)
            // изменение стилей лайк/нелайк
            const isAddInWishlist = this.#userDate.wishlist.filter(value => value.productID === productData.productID)
            if (isAddInWishlist.length) {
                $likeButton.classList.remove("likeNotActive")
                $likeButton.classList.add('likeActive')
            } else {
                $likeButton.classList.remove("likeActive")
                $likeButton.classList.add('likeNotActive')
            }
        }, false)
        $parent.append($product)
    }

    addProducts() {
        this.setData()
        this.wishlistChange()
        this.shoppingChange()
        const $container = document.getElementById('main')
        this.#productData.forEach(value => {
            this.createProduct($container, value)
        })
    }
}

/*function moveProduct($product, targetID, parentID, style = null, additionalStyles = null) {
    const $moveProduct = $product.cloneNode(true);
    //определение размеров и положения продукта для анимации
    let {left: leftProduct, top: topProduct, height: heightProduct, width: widthProduct} = $product.getBoundingClientRect()
    //определение размеров и положения цели для анимации

    // объект по targetID расположен в заголовке с position: fixed в верхней части экрана
    const {left, top, height, width} = document.getElementById(targetID).getBoundingClientRect()

    //добавление стиля для объекта анимации
    if (style) $moveProduct.classList.add(style)
    // смещение положения старта анимации в случае если прототип анимации сместился за видимую часть экрана
    if ((topProduct + heightProduct * 0.75) < top) {
        const {clientWidth, clientHeight} = document.documentElement
        topProduct = (clientHeight - heightProduct)/2
        leftProduct =(clientWidth - widthProduct)/2
    }
    //добавлене дополнительных переданных стилей по типу [{name:название, property:значение}] значения - строки
    if (additionalStyles) {
        additionalStyles.forEach(value => {
            $moveProduct.style[value.name] = value.property
        })
    }
    //установка layout для анимации
    $moveProduct.style.width = `${widthProduct}px`
    $moveProduct.style.height = `${heightProduct}px`
    $moveProduct.style.top = `${topProduct}px`
    $moveProduct.style.left = `${leftProduct}px`

    //нахождение родительского контейнера для анимации
    const $parent = document.getElementById(parentID)

    //определяем список правил CSS документа
    let styleSheet = document.styleSheets[0];
    //создаем уникальное имя анимации
    let animationName = `keyframe${Date.now()}`
    //определяем параметры необходимой анимации
    let keyframes =
        `@-webkit-keyframes ${animationName} {
                     100% {transform: translate3d(${left + width / 2 - widthProduct / 2 - leftProduct}px, ${top + height / 2 - heightProduct / 2 - topProduct}px, 0px) scale3d(0.1,0.1,0.1) rotate(360deg)}
                 }`
    //добавляем правило @-webkit-keyframes в список правил CSS документа
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    //устанавливаем правила выполнения анимации для анимируемого объекта
    $moveProduct.style.animation = `${animationName} 1.5s ease-in-out `
    // подписываемся на окончание анимации
    $moveProduct.addEventListener("animationend", () => {
        // находим добавленный @-webkit-keyframes, сохраненный в document.styleSheets
        let index = null
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            if (styleSheet.rules[i].name) {
                if (styleSheet.rules[i].name === animationName) {
                    //нахождение анимации по имени стиля  и опредление его индекса в таблице стилей
                    index = i
                }
            }
        }
        if (index !== null) {
            //если стиль найден  - удаляем его из таблице по индексу
            styleSheet.deleteRule(index)
        }
        //удаляем  обьект созданный для анимации
        $moveProduct.remove()
    })


    //коостыль добавления анимации на setTimeout
    /!* setTimeout(() => {
         $moveProduct.style.transform = `translate3d(${left + width / 2 - widthProduct / 2 - leftProduct}px, ${top + height / 2 - heightProduct / 2 - topProduct}px, 0px)
          scale3d(0.1,0.1,0.1) rotate(360deg)`
         $moveProduct.style.opacity = 0.2
         $moveProduct.addEventListener("transitionend", () => {
             $moveProduct.remove()
         })
     })*!/
    $parent.append($moveProduct)
}*/

const mainWishlist = new Wishlist()
mainWishlist.addProducts()
