$( document ).ready(function() 
{
console.log( "El DOM esta listo" );
});


const URLJSON = "../api.json"

    $.getJSON(URLJSON, function (respuesta, estado){
    if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
        $("#contenedor").prepend(`<div class ="card">
        <img src="${dato.imagen}" alt="" class="card-img">
        <h2 class ="titulo-secundario card-title">${dato.nombre}<h2>
        <h6 class="card-price">$${dato.precio}</h6>
        <h6 class="card-id" style="display:none">${dato.id}</h6>
        <button class="btn btn-dark button">Añadir al Carrito</button>
    </div>`)
        }  
    }
    let contador = 0;

$('.button').click((e)=>{
    


    if(contador === 0){
    $('#shop').append(`
    <span class="icon-button__badge" id="badge">1</span>
    `);
    contador = contador + 1;
    }else{
        contador = contador + 1;
        $('#shop').append(`
    <span class="icon-button__badge" id="badge">${contador}</span>
    `);
    
    }
});

const clickButton = document.querySelectorAll('.button');

clickButton.forEach(btn=>{
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-price').textContent;
    const itemImg = item.querySelector('.card-img').src;
    const itemId = +item.querySelector('.card-id').textContent;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1,
        id: itemId,
    }

    addItemCarrito(newItem)

    guardarCarrito()
}

function addItemCarrito(newItem){
    carrito.push(newItem)
}

function guardarCarrito(){
    localStorage.setItem("productos", JSON.stringify(carrito));
}
})


const carrito = [];
// let productos = [
//     {id: 1, nombre:"Surf Break Tee (White)", imagen:"../img/remera-1.jpg" , precio:3200},
//     {id: 2, nombre:"Peace No Love Tee (Tie Dye)", imagen:"../img/remera-2.jpg", precio:3650},
//     {id: 3, nombre:"Ripntail Tee (Grey Lightning Wash)", imagen:"../img/remera-3.jpg", precio:4800},
//     {id: 4, nombre:"Nerm Street Tee (Multi Spiral Dye)", imagen:"../img/remera-4.jpg", precio:3650},
//     {id: 5, nombre:"Prisma Embroidered Tee (Blue Lightning Wash)", imagen:"../img/remera-5.jpg", precio:4800},
//     {id: 6, nombre:"Lord Nermal Pocket Tee (Spiral Dye)", imagen:"../img/remera-6.jpg", precio:3650},
//     {id: 7, nombre:"Ripndip Teddy Fresh Packable Anorak Jacket", imagen:"../img/buzo-1.jpg", precio:11800},
//     {id: 8, nombre:"Nerm Street Hooded Coach Jacket (Black)", imagen:"../img/buzo-2.jpg", precio:11700},
//     {id: 9, nombre:"Nermzilla Hooded Coach Jacket (Baby Blue)", imagen:"../img/buzo-3.jpg", precio:11700},
//     {id: 10, nombre:"Heaven And Hell Puffer Jacket (Blue)", imagen:"../img/campera-1.jpg", precio:17100},
//     {id: 11, nombre:"Field Of Cats Sherpa Jacket (Black)", imagen:"../img/campera-2.jpg", precio:11700},
//     {id: 12, nombre:"RIPNTAIL Sherpa Jacket (Tie Dye)", imagen:"../img/campera-3.jpg", precio:12800},
//     {id: 13, nombre:"Great Wave Face Mask (Multi)", imagen:"../img/accesorio-1.jpg", precio:1950},
//     {id: 14, nombre:"Nerm Plush Chair", imagen:"../img/accesorio-2.jpg", precio:532800},
//     {id: 15, nombre:"Lord Nermal Plush Keychain (White)", imagen:"../img/accesorio-3.jpg", precio:1600},
//     {id: 16, nombre:"Gluten Free Hoodie (Black)", imagen:"../img/coleccion-1.jpg", precio:8600},
//     {id: 17, nombre:"Gluten Free Tee (Natural)", imagen:"../img/coleccion-2.jpg", precio:3250},
//     {id: 18, nombre:"Rubber Logo Hoodie (Sunburst Spiral Tie Dye)", imagen:"../img/coleccion-3.jpg", precio:9700},
// ];
// Creación de Cards de Productos

const listaProductos = document.getElementById("contenedor");

// productos.forEach(prod => {
//     let card = document.createElement('div');
//     card.innerHTML = `
//     <div class ="card">
//     <img src="${prod.imagen}" alt="" class="card-img">
//     <h2 class ="titulo-secundario card-title">${prod.nombre}<h2>
//     <h6 class="card-price">$${prod.precio}</h6>
//     <h6 class="card-id" style="display:none">${prod.id}</h6>
//     <button class="btn btn-dark button">Añadir al Carrito</button>
// </div>`

// listaProductos.appendChild(card);
// })


