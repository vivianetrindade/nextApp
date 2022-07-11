function Products({ ProductName, ProductDescription, ProductPrice, ProductImage}) {
    //let { file, description } = ProductImage;
    return (
        <div className="product">
            <h1>{ProductName}</h1>
            <img src={ProductImage} />
            <p>{ProductDescription}</p>
            <p>{ProductPrice}</p>
        </div>
    );
}
export default Products;