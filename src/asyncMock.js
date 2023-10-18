//import Producto from "./pages/producto"

const lista_productos = [
    {
    "id": 1,
    "title": "Lomo Mediano Mas Papas Fritas",
    "price": 4150,
    "description": "pan, mayo, bife de lomo, lechuga, tomate, queso y papas fritas",
    "category": "lomos",
    "image": "https://images.deliveryhero.io/image/pedidosya/products/ec86724d-d209-4346-aa42-fc574035cc4b.jpeg?quality=90&width=1920&webp=1",
    "stock": 50,
    "rating": {
    "rate": 4.3,
    }
    },
    {
    "id": 2,
    "title": "Empanada criolla",
    "price": 500,
    "description": "Carne, cebolla, cebolla de verdeo, huevos, sal, comino, ají molido, pimentón dulce. Cortada a cuchillo.",
    "category": "empanadas",
    "image": "https://images.deliveryhero.io/image/pedidosya/products/e9968a88-1053-428f-b03f-695598d09133.jpg?quality=90&width=1920&webp=1",
    "stock": 33,
    "rating": {
    "rate": 4.1
    
    }
    },
    {
    "id": 3,
    "title": "Empanada árabe",
    "price": 500,
    "description": "carne molida, cebolla, tomate, zumo de limón, sal, pimienta negra.",
    "category": "empanadas",
    "image": "https://images.deliveryhero.io/image/pedidosya/products/c8e3c366-7213-43d2-9790-e57bb565ca65.jpg?quality=90&width=1920&webp=1",
    "stock": 50,
    "rating": {
    "rate": 4.7
    
    }
    },
    {
    "id": 4,
    "title": "Pizza con muzzarella",
    "price": 3500,
    "description": "Masa, salsa, queso muzzarella, orégano y aceitunas.",
    "category": "pizzas",
    "image": "https://images.deliveryhero.io/image/pedidosya/products/ba79612f-c8e5-40c8-92be-aaf74750c5cf.jpg?quality=90&width=1920&webp=1",
    "stock": 30,
    "rating": {
    "rate": 4.8
    
    }
    },
    {
    "id": 5,
    "title": "Pizza napolitana",
    "price": 4150,
    "description": "Masa, salsa, muzzarella, tomates perita, aceite de oliva, sal, queso sardo rallado y aceitunas negras.",
    "category": "pizzas",
    "image": "https://images.deliveryhero.io/image/pedidosya/products/3503ef3e-4281-4601-a8d2-077bcf2fdb66.jpg?quality=90&width=1920&webp=1",
    "stock": 40,
    "rating": {
    "rate": 4.6
    
    }
    }
    ]

   // export default lista_productos;

   export const getProductos = ()=>{

    return new Promise((resolve)=>{

        setTimeout ( ()=> {

            //let cantidad  = Math.floor(Math.random() * lista_productos.length);
            //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
            resolve(lista_productos);

                },500)
        }  )
   }

   export const getProductById = (idProduct)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find( prod => prod.id === idProduct))
        }, 500);
        
    })

   }

   export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter( prod => prod.category === category ))
        }, 500);
    })

   }