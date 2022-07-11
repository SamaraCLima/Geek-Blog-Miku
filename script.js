let item1 = {
    Nome: "Hatsune Miku Sakura Blossom",
    Valor: "R$100,00",
    Imagem: "1.png"
            }
let item2 = {
    Nome: "Hatsune Miku MLP Collab",
    Valor: "R$200,00",
    Imagem: "2.jpg"
            }
let item3 = {
    Nome: "Hatsune Miku Kawaii",
    Valor: "R$150,00",
    Imagem: "3.jpg"
            }
let listFigure = [];
let listPainting = [];

function createActionItem(objeto){
    listFigure.push(objeto)
}
createActionItem(item1)
createActionItem(item2)
createActionItem(item3)

//_______________________________________________
let item4 = {
    Nome: "Poster Vocaloid Miku",
    Valor: "R$90,00",
    Imagem: "4.jpg"
            }
let item5 = {
    Nome: "Poster MikuV2",
    Valor: "R$80,00",
    Imagem: "5.jpg"
            }
let item6 = {
    Nome: "Hatsune Miku Love is War",
    Valor: "R$70,00",
    Imagem: "6.jpg"
            }

function createPaintingItem(objeto){
    listPainting.push(objeto)
}
createPaintingItem(item4)
createPaintingItem(item5)
createPaintingItem(item6)
//1-criar um array de objs
//2- capturar e armazenar em uma variavel o elemnto estatico 
//que ira receber os cards
//3-criar a ul
//4- criar a li baseada na lista de objetos
//5- pendurar as li nas ul







function createCards(array,section){
    let cards = cardsFigure(array)
    let teste = document.querySelector(`.${section}`)
    teste.append(cards)


}

function cardsFigure(arrayfigures){
    let ul = document.createElement("ul")
    ul.classList.add("lista")
    for (let i = 0;i < arrayfigures.length;i++){
        let li = document.createElement("li")
        li.classList.add("produto")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let img = document.createElement("img")
    
        h3.innerText=arrayfigures[i].Nome
        p.innerText=arrayfigures[i].Valor
        img.src=arrayfigures[i].Imagem
        console.log(arrayfigures[i].Imagem)
        li.append(h3,p,img)
        ul.append(li)
    }
    return ul
}
//capturar cada uma das sessões
//chamar a função de crirar cards passando os dois paramentros, 1 vai ser a lista de objs e a segunda a sessão(section)

createCards(listFigure,"figures")
createCards(listPainting, "posters")
//cardsFigure(listFigure)

//interar = loop for ou for it
//nunca colocar script no topo
