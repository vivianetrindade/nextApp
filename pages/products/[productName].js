import { fetchEntries } from '../../utils/contentfulProducts';

export const getStaticPaths = async () => {
    const res = await fetchEntries();
    const paths = await res.map((p) => {
        return {
            params: { productName: p.fields.productName1 }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const productName = context.params.productName;
    const res = await fetchEntries()
    const productsName = await res.map((p) => {
      return p.fields.productName1
    })
  
    return {
      props: {
        productsName,
      },
    }
}

const ProductsDetails = ({ productsName }) => {
    return (
        <div>
         <h1>Products Details</h1>
        </div>
    );
}

export default ProductsDetails;