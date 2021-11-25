
export const moveProduct =($product, targetID, parentID, style = null, additionalStyles = null)=> {
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
    const styleSheet = document.styleSheets[0];
    //создаем уникальное имя анимации
    const animationName = `keyframe${Date.now()}`
    //определяем параметры необходимой анимации
    const keyframes =
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
    /* setTimeout(() => {
         $moveProduct.style.transform = `translate3d(${left + width / 2 - widthProduct / 2 - leftProduct}px, ${top + height / 2 - heightProduct / 2 - topProduct}px, 0px)
          scale3d(0.1,0.1,0.1) rotate(360deg)`
         $moveProduct.style.opacity = 0.2
         $moveProduct.addEventListener("transitionend", () => {
             $moveProduct.remove()
         })
     })*/
    $parent.append($moveProduct)
}
