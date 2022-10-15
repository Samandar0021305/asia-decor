const sectionCatalog = document.querySelector(".sectionCatalog__list");

const katalog = [
    {id:1, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res1.png",
    },
    {id:2, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res2.png",
    },
    {id:3, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res3.png",
    },
    {id:4, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res4.png",
    },
    {id:1, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res1.png",
    },
    {id:2, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res2.png",
    },
    {id:3, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res3.png",
    },
    {id:4, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res4.png",
    },
    {id:1, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res1.png",
    },
    {id:2, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res2.png",
    },
    {id:3, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res3.png",
    },
    {id:4, 
    text:"Белые сотые",
    img:"./assets/img/katalog/res4.png",
    },
]

function listAdd(list,katalog = []){
     
    let fragment = new DocumentFragment();
  for(let item of katalog){
    let sectionLi = document.createElement("li");
    let sectionImg = document.createElement("img");
    sectionImg.src = item.img;
    let text = document.createElement("p")
    text.textContent = item.text
    sectionLi.appendChild(sectionImg);
    sectionLi.appendChild(text);
    fragment.appendChild(sectionLi);
  }

  list.appendChild(fragment)
  return list;
}

listAdd(sectionCatalog,katalog);