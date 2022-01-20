import React from "react";
import ResponsiveAppBar from "../appbar.component";
import Footer from "../footer.component";
import Head from "next/head";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Lic. Romina Gambino</title>
                <meta name="description" content="Licenciada Romina Gambino" />
                <link rel="icon" href="img/psicologia.png" />
            </Head>
            <ResponsiveAppBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;