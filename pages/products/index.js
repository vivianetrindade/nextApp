import styles from '../../styles/Home.module.css';
import { fetchEntries } from '../../utils/contentfulProducts';
// import Products from '../../Components/Products';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const [input, setInput] = useState('');
  const router = useRouter();

  const changeHandler = (e) => {
    setInput(e.target.value);
  }

  

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Search</h3>
          <input 
                type="text" 
                placeholder="Enter id"
                id="name" 
                size="10"
                value={input}
                onChange={changeHandler}
                >
            </input>
            <button
                type="submit"
                onClick={()=>{router.push(`/products/${input}`)}}
                >Submit
            </button>
        </div>
        <h1>Products</h1>
        <section className={styles.grid}>
            {products.map((product) => (
              <div className={styles.card} key={product.id}>
                <Link href={`/products/${product.id}`} >
                    <a><h3>{product.productName1}</h3></a>
                </Link>
                <p>Description: {product.productDescription}</p>
                <p>Price: {product.productPrice}</p>
                <img className={styles.image__box} src={`https:${product.productImage.fields.file.url}`} alt={product.productImage.fields.description} />
              </div>
            ))}
        </section>
      </div>
    )
}
export default ProductsPage;
