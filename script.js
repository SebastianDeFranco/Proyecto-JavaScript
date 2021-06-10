const listaProductos = document.getElementById("contenedor");

productos.forEach(prod => {
    let card = document.createElement('div');
    card.innerHTML = `
    <div class ="card">
    <img src="${prod.imagen}" alt="">
    <h2 class ="titulo-secundario">${prod.nombre}<h2>
    <p class="parrafo-card">$${prod.precio}</p>
    <span class ="pointer" id="prod${prod.id}">
    <span class="material-icons">add_shopping_cart</span>
    </span>
</div>`

listaProductos.appendChild(card);


const shop = document.getElementById("shop");

let boton = document.getElementById("prod"+ prod.id)
boton.addEventListener('click', ()=>{
    
    let badge = document.createElement('Span');
    badge.innerHTML = `
    <span class="icon-button__badge" id="demo">
    </span>
    `

    shop.appendChild(badge);
    
    var a = 0;
    function myFunction() {
    a = a + 1;
    document.getElementById("demo").textContent = a;
    }
    
        boton.addEventListener('click', myFunction());
    
    

    sessionStorage.setItem('nombreProducto', prod.nombre);
    sessionStorage.setItem('precioProducto', prod.precio);
    let nombreProducto = sessionStorage.getItem('nombreProducto');
    let precioProducto = sessionStorage.getItem('precioProducto');
    console.log(prod.nombre +" $" + prod.precio);



})

})
















