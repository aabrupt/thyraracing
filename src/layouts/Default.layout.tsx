import React, {FC} from 'react'
import styles from '@styles/Default.layout.module.sass'
//Components
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Default: FC<{title: string}> = ({children, title}) => {

    const meta = {
        title: "Thyra Racing",
        description: "Sidan är om föraren Thyra Larsson Svensli",
        robots: "index, follow",
        charSet: "UTF8",
    }

    return(
        <div className={styles.container}>
            <Head>
            <title>{title}</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description} />
            <meta name="robots" content={meta.robots} />
            <meta httpEquiv="Content-Type" content="text/html" charSet={meta.charSet} />
            <link rel="canonical" href="/" />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <Navbar />
                
            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Default