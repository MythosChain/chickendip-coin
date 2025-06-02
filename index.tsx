import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChickenDip Coin</title>
        <meta name="description" content="Buy the dip. Eat the dip." />
      </Head>

      <main className={styles.main}>
        <img src="/chicken-nft.png" alt="ChickenDip NFT" className={styles.heroImage} />
        <h1 className={styles.title}>🐔 ChickenDip Coin</h1>
        <p className={styles.description}>Buy the dip. Eat the dip.</p>
        <div className={styles.buttons}>
          <button>BUY CDC</button>
          <button>LIVE DIP METER</button>
          <button>VIEW NFTs</button>
          <button>CONNECT WALLET</button>
        </div>
      </main>
    </div>
  );
}
