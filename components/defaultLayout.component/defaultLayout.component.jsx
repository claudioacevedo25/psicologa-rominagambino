import React from "react";
import ResponsiveAppBar from "../appbar.component";
import Footer from "../footer.component";
import Head from "next/head";
import style from './defaultLayout.module.css';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Lic. Romina Gambino</title>
                <meta name="description" content="Licenciada Romina Gambino" />
                <link rel="icon" href="img/psicologia.png" />
            </Head>
            <ResponsiveAppBar />
            <main className={style.container}>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;