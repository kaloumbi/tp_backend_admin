addProduct = () => {
    const newProduct = {
        name: localStorage.getItem("name"),
        description: localStorage.getItem("description"),
        price: localStorage.getItem("price"),
        stock: localStorage.getItem("stock"),
        image: localStorage.getItem("image")
    }

    //nettoyer le localStorage
    localStorage.clear();

    console.log("Mon Produit affiché", newProduct);
    
}