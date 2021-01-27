import React from 'react';
import Head from 'next/head'
import BarraFooter from '../components/barraFooter';
import Main from '../components/Main';
import DadosContextProvider from '../contexts/DadosContext';
import {template} from '../data';


export async function getStaticProps(context) {
  return {
    props: {template}, // will be passed to the page component as props
  }
}


export default function Index(template) {
  //console.log(template);
  return (
    <DadosContextProvider>
      <>
        <Head>
              <link rel="icon" href="/favicon" />
        </Head>
        <Main template={template}/>
        <BarraFooter/>
      </>
    </DadosContextProvider>
  )
}
