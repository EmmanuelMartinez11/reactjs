import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVo5xfemvwD_ifnOzMtXY7myzGU0vMy-Q",
  authDomain: "proyecto-final-de-reactjs.firebaseapp.com",
  projectId: "proyecto-final-de-reactjs",
  storageBucket: "proyecto-final-de-reactjs.appspot.com",
  messagingSenderId: "632781171983",
  appId: "1:632781171983:web:05cc22d281568b907da27a"
};


const app = initializeApp(firebaseConfig);
const bd = getFirestore() // referencia a la base de datos

export const cargarBDD = async () => { //Crea una coleccion tomando el json de mi aplicacion
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(bd, "productos"), { //collection si existe productos, lo consulta sino lo crea y lo consulta
          nombre: prod.nombre,
          marca: prod.marca,
          modelo: prod.modelo,
          idCategoria: prod.idCategoria,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })
  })
}

export const getProductos = async () => { //Toma los productos de mi coleccion y me los convierte en objetos
  const productos = await getDocs(collection(bd, "productos"))
  const items = productos.docs.map(prod => {
      return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProducto = async (id) => { //Toma un producto en especifico y me lo pasa a objeto
  const producto = await getDoc(doc(bd, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}

export const updateProducto = async (id, info) => { //Modifica la informacion de un producto en la base de datos
  await updateDoc(doc(bd, "productos", id), info)
}

export const deleteProducto = async(id) => { //Elimina un producto de la base de datos
  await deleteDoc(doc(bd, "productos", id))
}

export const createOrdenDeCompra = async (cliente, producto, precioTotal, fecha) => { //Crea un nuevo documento, gracias a addDoc, y lo agrega a la coleccion
  const ordenDeCompra = await addDoc(collection(bd, "ordenesDeCompra"), {
    datosCliente: cliente,
    productosComprados: producto,
    precioTotal: precioTotal,
    fecha: fecha 
  })
  return ordenDeCompra
}

export const getOrdenDeCompra = async (id) => { //Toma un documento de la coleccion y lo transforma en objeto
  const ordenDeCompraFirebase = await getDoc(doc(bd, "ordenesDeCompra", id))
  const ordenDeCompra = {...ordenDeCompraFirebase.data(), id: ordenDeCompraFirebase.id}
  return ordenDeCompra
}