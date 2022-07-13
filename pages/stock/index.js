import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'


const Stock = () => {
    const [stock, setStock] = useState([]);
    // const router = useRouter();
    // const { pid } = router.query;

    const fecthStock = async () => {
        
        const response = await fetch(`/api/product/hello`);
        const data = await response.json();
        setStock(data);
    }

    useEffect(() => {
        fecthStock();
    }
    , []);

    return (
        <div>
            <h1>Stock</h1>
            <div className="stock">
                {stock.map(item => (
                    console.log(item, 'item'),
                    <div className="product" key={item.id}>
                        <h1>{item.productName}</h1>
                        <p>{item.productQuantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Stock;