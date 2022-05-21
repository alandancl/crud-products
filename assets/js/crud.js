import { printProducts } from "./ui.js";

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null; //Guarda el ID obtenido en edit para hacerle update


function getProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then( (response) => {
            //console.log('Funciona');
            //console.log(response);
            const products = response.data;
            //console.log(products);
            printProducts(products);
        }).catch( (error) => {
            console.log('No funciona');
            console.log(error);
        });
}

function createProduct() {
    const newProduct = {
        name: document.getElementById('p-name').value,
        price: document.getElementById('p-price').value,
        image: document.getElementById('img-url').value
    }
    

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newProduct)
        .then( (response) => {
            console.log(response);
            alert('Se creo el product correctamente');
            getProducts();
        }).catch( (error) => {
            console.log(error);
            alert('No se pudo crear el producto');

        });
}

//Esta funcion esta asociada con el boton en el producto
function editProduct(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then( (response) => {
            editingID = id;
            const product = response.data;
            document.getElementById('p-name-update').value = product.name;
            document.getElementById('p-price-update').value = product.price;
            document.getElementById('img-url-update').value = product.image;
        }).catch( (error) => {
            alert('No se pudo cargar el producto');
            console.log(error);
        })
}

//Esta funcion esta asociada con el boton en el formulario
function updateProduct(id) {
    const editedProduct = {
        name: document.getElementById('p-name-update').value,
        price: document.getElementById('p-price-update').value,
        image: document.getElementById('img-url-update').value
    }
    console.log(editedProduct);
    axios.put(`${baseURL}/products/${editingID}`, editedProduct)
        .then( (response) => {
            alert('Se edito correctamente el producto');
            getProducts();
        }).catch( (error) => {
            alert('No se pudo editar el product');
        });
}

function deleteProduct(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return ;
    }
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('El producto se eliminó correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo eliminar el producto');
        })
}


export { getProducts, createProduct, editProduct, updateProduct, deleteProduct }