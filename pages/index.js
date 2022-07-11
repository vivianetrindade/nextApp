import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { fetchEntries } from '../utils/contentfulProducts';
import Products from '../components/Products';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='products'>
          {products.map((product) => (
            <Products key={product.id} 
            ProductName={product.ProductName} 
            ProductDescription={product.ProductDescription}
            ProductPrice={product.ProductPrice}
            ProductImage={product.ProductImage} />
          ))}
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
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