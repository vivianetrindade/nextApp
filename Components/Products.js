import Link from "next/link";


function Products({ productName1, productDescription, productPrice, productImage, productId }) {
      let { file, description } = productImage;
    return (
        <div className="product">
            <Link href={`/products/${productId}`} key={productId}>
                <a><h3>{productName1}</h3></a>
            </Link>
            <img src={`https:${file.url}`} alt={description} />
            <p>{productDescription}</p>
            <p>{productPrice}</p>
        </div>
    );
}
export default Products;