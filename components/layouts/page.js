import React from 'react';
import Head from 'next/head';

export default (props) => {
  return (
    <div className='page'>
      <Head>
        <title>Sutherlandon</title>
      </Head>
      <div id='background-fader'></div>
      <div className='page-wrapper'>
        {props.children}
      </div>
      <div className="footer">
        Designed by Landon Sutherland |
        Built using <a href="https://purecss.io/">Pure</a> & <a href="http://lesscss.org/">Less</a>
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
        }
      `}</style>
    </div>
  );
}
