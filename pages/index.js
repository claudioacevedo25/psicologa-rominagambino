import Head from 'next/head'
import Footer from '../components/footer.component/footer.component';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lic. Romina Gambino</title>
        <meta name="description" content="Licenciada Romina Gambino" />
        <link rel="icon" href="img/psicologia.png" />
      </Head>

      <main className={styles.main}>
      
      </main>
      <Footer/>
     
    </div>
  )
}
