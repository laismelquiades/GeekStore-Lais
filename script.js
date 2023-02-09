let itens = [ {
    picture:`assets/img/painting/hellfire.jpg`,
    name:"HellFire Club",
    price:"R$ 89,00",
    type:"quadro",
    },

    {
    picture:`assets/img/painting/darth-vader.webp`,
    name:"Darth Vader",
    price:"R$ 99,00",
    type:"quadro",
    },

   
    {
    picture:`assets/img/painting/Harry-Porter.jpg`,
    name:"Harry Porter",
    price:"R$ 89,00",
    type:"quadro", 
    },

    {
    picture:`assets/img/actions/mulhermaravilha.webp`,
    name:"Wonder Woman",
    price:"R$ 79,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/batman.jpg`,
    name:"Batman",
    price:"R$ 95,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/chew.webp`,
    name:"Chewbacca Star Wars",
    price:"R$ 68,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/daneerys.jpg`,
    name:"Daenerys Targaryen",
    price:"R$ 98,00",
    type:"action",
    },

    {
    picture:"assets/img/actions/naruto.webp",
    name:"Naruto",
    price:"R$ 62,00",
    type:"action",
    },

    {
    picture:`assets/img/painting/hellfire.jpg`,
    name:"HellFire Club",
    price:"R$ 89,00",
    type:"quadro",
    },

    {
    picture:`assets/img/painting/darth-vader.webp`,
    name:"Darth Vader",
    price:"R$ 99,00",
    type:"quadro",
    },

    
    {
    picture:`assets/img/painting/Harry-Porter.jpg`,
    name:"Harry Porter",
    price:"R$ 89,00",
    type:"quadro", 
    },

    {
    picture:`assets/img/actions/mulhermaravilha.webp`,
    name:"Wonder Woman",
    price:"R$ 79,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/batman.jpg`,
    name:"Batman",
    price:"R$ 95,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/chew.webp`,
    name:"Chewbacca Star Wars",
    price:"R$ 68,00",
    type:"action", 
    },

    {
    picture:`assets/img/actions/daneerys.jpg`,
    name:"Daenerys Targaryen",
    price:"R$ 98,00",
    type:"action",
    },

    {
    picture:"assets/img/actions/naruto.webp",
    name:"Naruto",
    price:"R$ 62,00",
    type:"action",
    },

    {
        picture:`assets/img/painting/hellfire.jpg`,
        name:"HellFire Club",
        price:"R$ 89,00",
        type:"quadro",
        },
    
        {
        picture:`assets/img/painting/darth-vader.webp`,
        name:"Darth Vader",
        price:"R$ 99,00",
        type:"quadro",
        },
    
            
        {
        picture:`assets/img/painting/Harry-Porter.jpg`,
        name:"Harry Porter",
        price:"R$ 89,00",
        type:"quadro", 
        },
    
        {
        picture:`assets/img/actions/mulhermaravilha.webp`,
        name:"Wonder Woman",
        price:"R$ 79,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/batman.jpg`,
        name:"Batman",
        price:"R$ 95,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/chew.webp`,
        name:"Chewbacca Star Wars",
        price:"R$ 68,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/daneerys.jpg`,
        name:"Daenerys Targaryen",
        price:"R$ 98,00",
        type:"action",
        },
    
        {
        picture:"assets/img/actions/naruto.webp",
        name:"Naruto",
        price:"R$ 62,00",
        type:"action",
        },
    
        {
        picture:`assets/img/painting/hellfire.jpg`,
        name:"HellFire Club",
        price:"R$ 89,00",
        type:"quadro",
        },
    
        {
        picture:`assets/img/painting/darth-vader.webp`,
        name:"Darth Vader",
        price:"R$ 99,00",
        type:"quadro",
        },
    
        
        {
        picture:`assets/img/painting/Harry-Porter.jpg`,
        name:"Harry Porter",
        price:"R$ 89,00",
        type:"quadro", 
        },
    
        {
        picture:`assets/img/actions/mulhermaravilha.webp`,
        name:"Wonder Woman",
        price:"R$ 79,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/batman.jpg`,
        name:"Batman",
        price:"R$ 95,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/chew.webp`,
        name:"Chewbacca Star Wars",
        price:"R$ 68,00",
        type:"action", 
        },
    
        {
        picture:`assets/img/actions/daneerys.jpg`,
        name:"Daenerys Targaryen",
        price:"R$ 98,00",
        type:"action",
        },
    
        {
        picture:"assets/img/actions/naruto.webp",
        name:"Naruto",
        price:"R$ 62,00",
        type:"action",
        }
]


let listFigure = [ 

]

let listFrames = [

   
]

function separateItens(itens) {

    for(let i = 0; i < itens.length; i++) {
        if (itens[i].type === "quadro") {
        listFrames.push(itens[i]) 
        } else {
          listFigure.push(itens[i])
        }
    }
}  
separateItens(itens)


const ulFrames = document.querySelector(".products1")
const ulFigure = document.querySelector(".products2")
console.log(ulFrames)
console.log(ulFigure)

function createCard(itens) {
    let tagLi = document.createElement("li")
    let tagImage = document.createElement("img")
    let tagH2 = document.createElement("h2")
    let tagPreco = document.createElement("p")
    

    tagImage.src = itens.picture
    tagH2.innerText = itens.name
    tagPreco.innerText = itens.price

    tagLi.append(tagImage, tagH2, tagPreco)
    

    return tagLi
} 


function listaProdutos (produtos, lista) {
    
    for(i = 0; i < produtos.length; i++) {
        
        let liCard = createCard(produtos[i])

        lista.appendChild(liCard)
       
    }
}

listaProdutos(listFigure, ulFigure)
listaProdutos(listFrames,ulFrames)






