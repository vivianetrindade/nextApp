//import { fetchEntries } from '../../utils/contentfulProducts';

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
  
    return {
      props: {
        product,
      },
    }
}

const ProductsDetails = ({ product }) => {
    return (
        <div>
         <h1>Products Details</h1>
            <h3>Product: {product[0].productName}</h3>
            <p>Quantity: {product[0].productQuantity}</p>
        </div>
    );
}

export default ProductsDetails;