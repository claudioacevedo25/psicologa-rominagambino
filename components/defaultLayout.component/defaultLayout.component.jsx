import React from "react";
import ResponsiveAppBar from "../appbar.component";
import Footer from "../footer.component";
import Head from "next/head";
import style from './defaultLayout.module.css';

const DefaultLayout = ({ children }) => {
    return (
        <div className={style.container}>
            <Head>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                <title>Lic. Romina Gambino</title>
            </Head>
            <ResponsiveAppBar />
            <main className={style.mainContainer}>{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;