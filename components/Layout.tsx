import Head from 'next/head'
import Footer from './Footer'
import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Soccer Schedule</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
