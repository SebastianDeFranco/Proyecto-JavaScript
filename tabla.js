// Traemos los productos del localStorage

const carritos = JSON.parse(localStorage.getItem('productos'));


// Creamos un for of para crear una tabla dinamica con DOM

for(item of carritos){
    const fila1 = document.createElement('tr');
    fila1.setAttribute('class', 'fila-producto')
    fila1.innerHTML = `
    <th scope="row">${item.cantidad}</th>
    <td class="table__productos">
        <img src=${item.img} alt="" class="img-size">
        <h6 class="title">${item.title}</h6>
    </td>
    <td class="table__price"><p>${item.precio}</p></td>
    <td class="table__cantidad">
    <select name="select">
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
    </select>
    <td class=" table__cantidad">
        <button class="btn btn-outline-success" id="aumentar" onclick="aumentar()">+</button>
        <button class="btn btn-outline-success" id="disminuir" onclick="disminuir()">-</button>
        <input type="text"  value=0 id="cantidad">
        <button class="btn btn-danger" id="borrar">X</button>
    </td>
    `
    $('#tbody').append(fila1);

    
let inicio = 0;
let disminucion = document.getElementById('cantidad');

function aumentar(){ 
    let cantidad = document.getElementById('cantidad').value = ++inicio;
}


function disminuir(){
    if(disminuir === 0){
        disminucion.value = 0;
    }else{
        disminucion.value = --inicio;
    }
}
}




function disminuir(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

var cantidad = document.getElementById('cantidad').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
}



// let total = 0;
// let precioFinal = item.precio;
let tablaTotal = document.createElement('div');
    tablaTotal.innerHTML = `
        <div class="row">
            <div class="col">
                <h3 class="itemCartTotal">Total: </h3>
            </div>
            <div class="col d-flex justify-content-end">
                <button class="btn btn-success" id="comprar" data-toggle="modal" data-target="#exampleModal">Comprar</button>
            </div>
        </div>
`
    $('#tbody').append(tablaTotal);


// Funciones de la tabla dinamica

$('#borrar').click(()=>{
    $('.fila-producto').remove();
})

$('#comprar').click(()=>{
    $('#tbody').remove();
    console.log('Gracias por comprar!');
    let modal = document.createElement('div');
    modal.innerHTML =` 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Gracias por tu compra!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Ya recibimos tu pedido.</p>
                    <p>Recibiras un correo electrónico cuando el mismo este en camino a tu domicilio</p> 
                    <p>Saludos!</p>
                    <p>Equipo Ripndip :) </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `

    $('body').append(modal);
})


