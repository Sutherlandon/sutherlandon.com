import React from 'react';
import Head from 'next/head';
import Page from '../components/layouts/page';
import FontAwesomeIcon from '../components/icon_library';
import Gg from '../components/Gg';

export default () => (
  <Page title='A Thought'>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Charm" rel="stylesheet" />
    </Head>
    <div className='logo-left'>
      <Gg />
    </div>
    <div className='quote'>
      Round every corner, lies fleeting hope of respite. Focus on next step.
    </div>
    <div className='end-quote'>
      <FontAwesomeIcon icon='quote-right' size='5x'/>
    </div>
    <style jsx>{`
      .logo-left {
        width: 10%;
        display: inline-block;
      }
      .logo-left :global(svg) {
        height: 100%;
        width: 100%;
      }
      .quote {
        display: inline-block;
        font-family: 'Charm', cursive;
        width: 80%;
        margin: auto;
        font-size: 4em;
        color: white;
        padding: 0.25em;
        text-shadow: 2px 2px rgba(0,0,0,0.5);
      }
      .end-quote {
        display: inline-block;
        float: right;
        width: 10%;
        font-size: 72;
        font-weight: bold;
        text-align: right;
      }
    `}</style>
  </Page>
);
