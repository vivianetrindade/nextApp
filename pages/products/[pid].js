//import { fetchEntries } from '../../utils/contentfulProducts';
import { fetchEntry } from '../../utils/contentfulProducts';
import { useState} from 'react';

export const getStaticPaths = async () => {
    const res = await fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/hello`);
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
    const res = await fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/${pid}`);
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

    const buyhandle = () => {
        // do a fetch with metod post to the server
        fetch(`https://zippy-dolphin-faad4d.netlify.app/api/product/${product[0].id}`, {
            method: 'POST',
        })
        .then(res => {
            console.log(res, 'response')
            res.json()})
        .then(data => {
            console.log(data);
            setProductQuantity(data.productQuantity);
        });
    }

    return (
        <div>
         <h1>Product Details</h1>
            <h3>Product: {product[0].productName}</h3>
            <p>Quantity: {productQuantity}</p>
            <p>Price: {product2.productPrice}kr</p>
            <img src={product2.productImage.fields.file.url} alt={product2.productImage.fields.description} />
            <button onClick={()=> {buyhandle(product2.id)}}>Buy</button>
        </div>
    );
}

export default ProductsDetails;