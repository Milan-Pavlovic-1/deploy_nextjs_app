import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Image
          src="/5minslearn.png"
          alt="5minslearn Logo"
          width={200}
          height={200}
        />
      </div>
      <h2 className={inter.className}>
           Milan Pavlovic, Welcome to 5minslearn, how is it going guys!
          </h2>

      <div className={styles.center}>
        

        <a
          href="https://5minslearn.gogosoon.com/?ref=github_nextjs_app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            5minslearn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>This pipeline was not that easy, it required a bit of googling and a few tries hehe
          Luckily in the end we got! (Hopefully)</p>
        </a>

        
      </div>
    </main>
  )
}
