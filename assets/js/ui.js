function printProducts(arrProducts) {
    //Identificar contenedor donde mostraremos los products
    const container = document.getElementById('products-container');
    //Generar el html
    let html = '';
    for (let i = 0; i < arrProducts.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="product-card border p-3">
                        <div class="product-img">
                            <img src="${ arrProducts[i].image }" alt="" class="product-image">
                        </div>
                        <div class="product-body text-center">
                            <h6 class="product-name mt-3">${ arrProducts[i].name }</h6>
                            <h5 class="product-price">$${ arrProducts[i].price }</h5>
                        </div>
                            <div class="text-end">
                            <button class="btn btn-danger" onclick="deleteProduct(${arrProducts[i].id})">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button class="btn btn-primary" onclick="editProduct(${arrProducts[i].id})">
                                <i class="fas fa-pen"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
    }
    container.innerHTML = html;
}

export { printProducts }