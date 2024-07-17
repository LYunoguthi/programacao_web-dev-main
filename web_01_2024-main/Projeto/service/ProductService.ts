


cadastrarProduto(produtoData: any): Product {
    const { name, price, vegano } = produtoData;
    if(!name || !price || !vegano ){
        throw new Error("Informações incompletas");
    }

    const produtoEncontrado = this.consultarProduto(undefined,name);
    if(produtoEncontrado){
        throw new Error("Produto já cadastrado!!!");
    }
    const novoProduto = new Product(name, price, vegano);
    this.productRepository.insereProduto(novoProduto);
    return novoProduto;
}