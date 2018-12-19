import React from 'react';
import Head from 'next/head';

export default (props) => {
  return (
    <div className='page'>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='page-wrapper'>
        <div className='background-fader'></div>
        {props.children}
      </div>
      <style jsx>{`
        .page {
          font-family: Hack, Arial, sans-serif;
          color: @dark-gray;
          background: black;
          background-image: url("/static/img/lc_sunset_square.jpg");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center -1355px;
          padding-top: 1px;
          height: 100%;
        }

        .page-wrapper {
          height: 100%;
        }

        .background-fader {
          position: fixed;
          background: black;
          background: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1));
          height: 1000px;
          top: 640px;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
