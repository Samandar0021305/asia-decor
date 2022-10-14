
let sectionList = document.querySelector(".section__list");


const api = [
    {id:1, src:"./assets/img/section/img1.png"},
    {id:2, src:"./assets/img/section/img2.png"},
    {id:3, src:"./assets/img/section/img3.png"},
    {id:4, src:"./assets/img/section/img4.png"},
]

function listAdd(list,api = []){
     
    let fragment = new DocumentFragment();
  for(let item of api){
    let sectionLi = document.createElement("li");
    let sectionImg = document.createElement("img");
    sectionImg.src = item.src;
    sectionLi.appendChild(sectionImg);
    fragment.appendChild(sectionLi);
  }

  list.appendChild(fragment)
  return list;
}

listAdd(sectionList,api);