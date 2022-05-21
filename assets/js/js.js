import { getProducts, createProduct, editProduct, updateProduct, deleteProduct } from "./crud.js";

getProducts();

window.createProduct = createProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.deleteProduct = deleteProduct;
