import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>

        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti est corrupti culpa alias consequuntur, cumque ipsum cupiditate enim nihil exercitationem laboriosam ipsam aspernatur dolorum sed adipisci, quam nostrum. Accusantium.</p>

        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti est corrupti culpa alias consequuntur, cumque ipsum cupiditate enim nihil exercitationem laboriosam ipsam aspernatur dolorum sed adipisci, quam nostrum. Accusantium.</p>

        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>

      </div>
    </>
  )
}
