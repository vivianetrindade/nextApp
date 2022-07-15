//import { fetchEntries } from '../../utils/contentfulProducts';
import { fetchEntry } from '../../utils/contentfulProducts';
import { useEffect, useState} from 'react';
import styles from '../../styles/Home.module.css';

export const getStaticPaths = async () => {
    const res = await fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/`);
    const data = await res.json();
    const paths = await data.map((p) => {
        return {
            params: { pid: p.id.toString() }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const { pid } = context.params;
    console.log(typeof pid, "this is pid");
        const res = await fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/${pid}`, { method: 'GET' });
        const product = await res.json();
    

    const res2 = await fetchEntry(pid);
    const product2 = await res2.fields;

    return {
      props: {
        product,
        product2,
      },
    }
}


const ProductsDetails = ({ product, product2 }) => {
    const [productQuantity, setProductQuantity] = useState(product[0].productQuantity);

    const buyhandle = async () => {
        // do a fetch with metod post to the server
        const res = await fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/${product[0].id}`, {
            method: 'POST',
        })
        console.log(res, "this is res");
        const data = await res.json();  
        console.log(data, "this is data");
        setProductQuantity(data.value.productQuantity);
    }
    useEffect(() => {
        console.log(product[0].productQuantity, "this is in useEffect");
    }
    , [productQuantity, product]);

    return (
        <div className={styles.main}>
         <h1>Product Details</h1>
            <h3>Product: {product[0].productName}</h3>
            <p>Quantity: {productQuantity}</p>
            <p>Price: {product2.productPrice}kr</p>
            <img src={product2.productImage.fields.file.url} alt={product2.productImage.fields.description} />
            <button onClick={()=> {buyhandle()}}>Buy</button>
        </div>
    );
}

export default ProductsDetails;