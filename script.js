let productos = [
    {id: 1, nombre:"Surf Break Tee (White)", imagen:"../img/remera-1.jpg" , precio:3200},
    {id: 2, nombre:"Peace No Love Tee (Tie Dye)", imagen:"../img/remera-2.jpg", precio:3650},
    {id: 3, nombre:"Ripntail Tee (Grey Lightning Wash)", imagen:"../img/remera-3.jpg", precio:4800},
    {id: 4, nombre:"Nerm Street Tee (Multi Spiral Dye)", imagen:"../img/remera-4.jpg", precio:3650},
    {id: 5, nombre:"Prisma Embroidered Tee (Blue Lightning Wash)", imagen:"../img/remera-5.jpg", precio:4800},
    {id: 6, nombre:"Lord Nermal Pocket Tee (Spiral Dye)", imagen:"../img/remera-6.jpg", precio:3650},
    {id: 7, nombre:"Ripndip Teddy Fresh Packable Anorak Jacket", imagen:"../img/buzo-1.jpg", precio:11800},
    {id: 8, nombre:"Nerm Street Hooded Coach Jacket (Black)", imagen:"../img/buzo-2.jpg", precio:11700},
    {id: 9, nombre:"Nermzilla Hooded Coach Jacket (Baby Blue)", imagen:"../img/buzo-3.jpg", precio:11700},
    {id: 10, nombre:"Heaven And Hell Puffer Jacket (Blue)", imagen:"../img/campera-1.jpg", precio:17100},
    {id: 11, nombre:"Field Of Cats Sherpa Jacket (Black)", imagen:"../img/campera-2.jpg", precio:11700},
    {id: 12, nombre:"RIPNTAIL Sherpa Jacket (Tie Dye)", imagen:"../img/campera-3.jpg", precio:12800},
    {id: 13, nombre:"Great Wave Face Mask (Multi)", imagen:"../img/accesorio-1.jpg", precio:1950},
    {id: 14, nombre:"Nerm Plush Chair", imagen:"../img/accesorio-2.jpg", precio:532800},
    {id: 15, nombre:"Lord Nermal Plush Keychain (White)", imagen:"../img/accesorio-3.jpg", precio:1600},
    {id: 16, nombre:"Gluten Free Hoodie (Black)", imagen:"../img/coleccion-1.jpg", precio:8600},
    {id: 17, nombre:"Gluten Free Tee (Natural)", imagen:"../img/coleccion-2.jpg", precio:3250},
    {id: 18, nombre:"Rubber Logo Hoodie (Sunburst Spiral Tie Dye)", imagen:"../img/coleccion-3.jpg", precio:9700},
];

const listaProductos = document.getElementById("contenedor");

productos.forEach(prod => {
    let card = document.createElement('div');
    card.innerHTML = `
    <div class ="card">
    <img src="${prod.imagen}" alt="">
    <h2 class ="titulo-secundario">${prod.nombre}<h2>
    <p class="parrafo-card">$${prod.precio}</p>
    <span" class ="pointer" id="prod${prod.id}">
    <span class="material-icons">add_shopping_cart</span>
    </span>
</div>`



listaProductos.appendChild(card);

const shop = document.getElementById("shop");

let boton = document.getElementById("prod"+ prod.id)
boton.addEventListener('click', ()=>{
    
    let badge = document.createElement('Span');
    badge.innerHTML = `
    <span class="icon-button__badge"></span>
    `
    shop.appendChild(badge);
    

    console.log(prod.nombre +" $" + prod.precio);
    
})

})














