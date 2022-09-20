//Agrregando EVENTOS

//OBJETO - clase constructora
class farmacia{
    constructor(id, laboratorio, producto, precio,imagen){
        this.id = id,
        this.laboratorio = laboratorio,
        this.producto = producto,
        this.precio = precio,
        this.imagen = imagen
    }//metodo
    verDatos(){        
        console.log(`En nuestro sistema encontramos:\nID: ${this.id}\nLABORATORIO: ${this.laboratorio}\nPRODUCTO: ${this.producto}\nPRECIO DE COSTO: ${this.precio}\n IMAGEN:${this.imagen}`)
    }
}
class sucursales{
    constructor(direccion, zona, telefono, imagen){        
        this.direccion = direccion,
        this.zona = zona,
        this.telefono = telefono
        this.imagen = imagen
    }//metodo
    verZona(){
        console.log(`Visita nuestras sucursales:\nNOMBRE: Farmacia Ivo\nZONA: ${zona}\nDIRECCIÓN: ${direccion}\nTELEFONO: ${telefono}`)
    }
}
//Instanciación de Objetos - PRODUCTOS DE FARMACIA Y SUCURSALES
//PRODUCTOS
const producto1 = new farmacia(0, "Bagó", "Tafirol", 250, "tafirol.jpg")

const producto2 = new farmacia(1, "Bagó", "Ibupirac", 450, "ibupirac.png")

const producto3 = new farmacia(2, "Bayer", "Bayaspirina", 455, "bayaspirina.jpg")

const producto4 = new farmacia(3, "Roemmers", "Amoxidal", 950, "amoxi.png")

const producto5 = new farmacia(4, "Cassara", "Betacort Plus", 700, "betacor.jpg")

const producto6 = new farmacia(5, "Ciccarelli", "Agua Oxigenada", 150, "agua.png")

const producto7 = new farmacia(6, "Ciccarelli", "Gazas", 280, "gazas.jpg")

const producto8 = new farmacia(7, "Medigen", "Salbutamol", 550, "salbutam.jpg")

const producto9 = new farmacia(8, "Porta", "Bi Alcohol 500ml", 700, "alcoho.jpg")

const producto10 = new farmacia(9, "Bayer", "Merthiolate", 400, "merthi.jpg")

const producto11 = new farmacia(10, "Elea", "Alernix Rapida Acción", 325, "alernix.png")

//SUCURSALES
const sucursal1 = new sucursales("Bajada Puccio 1552", "NORTE", 4251236, "sucursal.png")

const sucursal2 = new sucursales("Arijon 155 Bis", "SUR", 4125842, "sucursal.png")

const sucursal3 = new sucursales("Entre Ríos 729", "CENTRO", 4568523, "sucursal.png")

const sucursal4 = new sucursales("Pellegrini 6523", "OESTE", 4362145, "sucursal.png")

const sucursal5 = new sucursales("Bv. Seguí 6411", "SUDOESTE", 4302562, "sucursal.png")

//ARRAY CON LOS PRODUCTOS
//const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11]
const stock = []
stock.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11)

//ARRAY CON SUCURSALES
const locales = [sucursal1, sucursal2, sucursal3, sucursal4, sucursal5]


//interactuando con el DOM
let main_h1 = document.getElementById("main_h1")
main_h1.innerText = "Farmacia, laboratorio y bioquimica" //modifica el titulo

let agregados = document.getElementById("modificable")
agregados.innerHTML =`<h3 class="section_h3">Contactanos</h3>
<h4 class="section_h4">Puedes comunicarte con nosotros a través de los siguientes medios</h4>
<li>Whatsapp: +54 953265961</li>
<li>Email: colibri_cosmico@farmacia.com</li>
<li>Tel: 45888963</li>
<li>Te esperamos!</li>` //Agrego nueva seccion

let seVa = document.getElementById("contacto")
seVa.remove()// elimino un div

//------------------ MOSTRAR CATALOGO
let productos_stock = document.getElementById("productos")
function mostrarCatalogo(array){ 

    productos_stock.innerHTML = ""
    array.forEach((farmacia)=>{
        let stock_card = document.createElement("div")
        stock_card.innerHTML = `<div id="${farmacia.id}" class="card d-flex justify-content-start" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="sources/${farmacia.imagen}" alt="${farmacia.producto} de Laboratorios: ${farmacia.laboratorio}">
                                    <div class="card-body">
                                        <h4 class="card-title">${farmacia.producto}</h4>
                                        <p>Laboratorio: ${farmacia.laboratorio}</p>
                                        <p class="">Precio: $${farmacia.precio}</p>
                                        <button class="btn btn-outline-primary btn_compra">Agregar al carrito</button>
                                    </div>
        </div>`
        productos_stock.append(stock_card)
    })
    let btnCompra = document.getElementsByClassName("btn_compra")
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("Producto Agregado al Carrito")
    })
}
}

//---------------- PARA ESCONDER EL CATALOGO
function ocultarCatalogo(){
    productos_stock.innerHTML = ""
}

//---------------- PARA AGREGAR UN PRODUCTO NUEVO AL CATALOGO

function guardarProducto(array){
    let producto_nuevo = document.getElementById("producto_nuevo")
    let laboratorio_nuevo = document.getElementById("laboratorio_nuevo")
    let precio_nuevo = document.getElementById("precio_nuevo")
    let producto_creado = new farmacia (array.length+1, producto_nuevo.value, laboratorio_nuevo.value, parseInt(precio_nuevo.value), "producto_nuevo.jpg")
    console.log(producto_creado)
    array.push(producto_creado)
    console.log(array)
    // ------------ RESETEO DE LOS CAMPOS PARA DEJARLOS EN BLANCO
    producto_nuevo.value = ""
    laboratorio_nuevo.value = ""
    precio_nuevo.value = ""
    mostrarCatalogo(array)
}
//--------- BOTON PARA AGREGAR PRODUCTO NUEVO
let btn_agregar = document.getElementById("producto_nuevo_btn")
btn_agregar.addEventListener("click", ()=>{
    guardarProducto(stock)
})

// -------------- BOTON PARA MOSTRAR EL STOCK
let btn_catalogo = document.getElementById("ver_catalogo")
btn_catalogo.addEventListener("click", ()=>{
    mostrarCatalogo(stock)
})

//--------------- BOTON PARA OCULTAR EL CATALOGO
let btn_ocultar = document.getElementById("ocultar_catalogo")
btn_ocultar.onclick = ocultarCatalogo

//--------------- MOSTRAR LAS SUCURSALES
let mis_sucursales = document.getElementById("sucursales")
function mostrarSucursales(array){ 
    mis_sucursales.innerHTML = ""
    array.forEach((locales)=>{
        let sucursales_card = document.createElement("div")
        sucursales_card.innerHTML = `<div class="card d-flex justify-content-start" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="sources/${locales.imagen}" alt="${locales.zona} de Zona: ${locales.zona}">
                                    <div class="card-body">
                                        <h4 class="card-title">${locales.zona}</h4>
                                        <p>Dirección: ${locales.direccion}</p>
                                        <p class="">Teléfono: ${locales.telefono}</p>
                                        <button class="btn btn-outline-primary btn_ir">Ir</button>
                                    </div>
        </div>`
        mis_sucursales.append(sucursales_card)
    })
    let btnIr = document.getElementsByClassName("btn_ir")
    for(let compra of btnIr){
    compra.addEventListener("click", ()=>{
        alert("Llamando .... Prr Prr Prr")
    })
}
}

//---------------- PARA ESCONDER SUCURSAL
function ocultarSucu(){
    mis_sucursales.innerHTML = ""
}
// -------------- BOTON PARA MOSTRAR SUCURSALES
let btn_sucursal = document.getElementById("ver_sucu")
btn_sucursal.addEventListener("click", ()=>{
    mostrarSucursales(locales)
})

//--------------- BOTON PARA OCULTAR SUCURSALES
let btn_ocultar_sucu = document.getElementById("ocultar_sucu")
btn_ocultar_sucu.onclick = ocultarSucu
