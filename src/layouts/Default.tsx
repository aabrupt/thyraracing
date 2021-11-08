import React, {FC} from 'react'
import Head from '../components/Head'
import styles from '../styles/Default.module.sass'
//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Default: FC<{title: string}> = ({children, title}) => {
    return(
        <div className={styles.container}>
            <Head title={title} />

            <Navbar />
                
            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Default