let decorLIst = document.querySelector(".decor__list");
  
const resDecor = [
    {
    id:1,
    text:`Качественных 
    материалов`,
    img:"./assets/img/decor/decor1.png"
    },
    {
    id:2,
    text:`Регулярные
    Акции и скидки`,
    img:"./assets/img/decor/decor2.png"
    },
    {
    id:3,
    text:`Гарантия качества`,
    img:"./assets/img/decor/decor3.png"
    },
    {
    id:4,
    text:`Оптимальные цены на рынке`,
    img:"./assets/img/decor/decor4.png"
    },
    {
    id:5,
    text:`Бесплатная
    доставка покупок`,
    img:"./assets/img/decor/decor5.png"
    },
    {
    id:6,
    text:`Профессиональная сборка мебели`,
    img:"./assets/img/decor/decor6.png"
    },


]


decorFunc(resDecor ,decorLIst )
function decorFunc(resDecor = [],decorLIst){
    let fragmentEl = new DocumentFragment();

    for(let item of resDecor){
        let liEl = document.createElement("li");
        let imgEl = document.createElement("img");
        let textEl = document.createElement("h4");

        imgEl.src = item.img;
        textEl.textContent = item.text;

        liEl.appendChild(imgEl)
        liEl.appendChild(textEl)
        fragmentEl.appendChild(liEl)
    }
    decorLIst.appendChild(fragmentEl)

    return decorLIst
}