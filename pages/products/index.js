import styles from '../../styles/Home.module.css';
import { fetchEntries } from '../../utils/contentfulProducts';
// import Products from '../../Components/Products';
import Link from 'next/link';

export async function getStaticProps() {
    const res = await fetchEntries()
    const products = await res.map((p) => {
      return p.fields
    })
  
    return {
      props: {
        products,
      },
    }
}

const ProductsPage = ({ products }) => {
    console.log(products, 'products');
    return (
        <div className={styles.container}>
            <h1>Products</h1>
            {products.map((product) => (
                <Link href={`/products/${product.productName1}`} key={product.id}>
                    <a><h3>{product.productName1}</h3></a>
                </Link>
            ))}
        </div>
    )
}
export default ProductsPage;
