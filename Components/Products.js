import Link from "next/link";
import styles from "../styles/Home.module.css";


function Products({ productName1, productDescription, productPrice, productImage, productId }) {
      let { file, description } = productImage;
    return (
        <div className={styles.card}>
            <Link href={`/products/${productId}`} key={productId}>
                <a><h3>{productName1}</h3>
            
            <img className={styles.image__box} src={`https:${file.url}`} alt={description} />
            <p>{productDescription}</p>
            <p>{productPrice}</p>
            </a>
            </Link>
        </div>
    );
}
export default Products;