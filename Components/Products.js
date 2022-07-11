function Products({ productName1, productDescription, productPrice, productImage}) {
     // let { file, description } = productImage;
    return (
        <div className="product">
            <h1>{productName1}</h1>
            <img src={productImage} />
            <p>{productDescription}</p>
            <p>{productPrice}</p>
        </div>
    );
}
export default Products;