import React, { Component } from "react";
import Head from 'next/head'

class PageHelmet extends Component{
    render(){
        return(
            <>
                <Head>
                    <title>{this.props.pageTitle} || React Multipurpose Template </title>
                    <meta name="description" content="Trydo – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ." />
                </Head>
            </>
        )
    }
}


export default PageHelmet;
