let uslugiList = document.querySelector(".uslugi__list");

const restApi = [
    {
        id:1,
        src:"./assets/img/section-img/img1.png",
        title:"Распиловка",
        text:"Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
    },
    
    {
        id:2,
        src:"./assets/img/section-img/img2.png",
        title:"Колеровка",
        text:"С помощью системы колеровки, мы поможем вам подобрать наиболее точный цвет.  "
    },
    {
        id:3,
        src:"./assets/img/section-img/img1.png",
        title:"Грузчики",
        text:"С помощью системы колеровки, мы поможем вам подобрать наиболее точный цвет.  "
    },
    {
        id:4,
        src:"./assets/img/section-img/img4.png",
        title:"Доставка",
        text:"Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
    },

]


function results(restApi = [], list){
    const fragment = new DocumentFragment();
    for(let item of restApi){
        let liEl = document.createElement("li");
        let imgEl = document.createElement("img");
        let titleEl = document.createElement("h3");
        let textEl = document.createElement("p");
        imgEl.src = item.src;
        titleEl.textContent = item.title;
        textEl.textContent = item.text;
        liEl.appendChild(imgEl)
        liEl.appendChild(titleEl)
        liEl.appendChild(textEl);

        fragment.appendChild(liEl)
    }
    list.appendChild(fragment);

    return list;
}


results(restApi,uslugiList)