import React, { Fragment } from 'react';
import Content from './layouts/content';
import FontAwesomeIcon from '../components/icon_library';
import Gg from '../components/Gg';

export default () => (
  <Fragment>
    <div style={{ margin: '2em auto' }}>
      <div className='logo'>
        <Gg />
      </div>
      <div className='quote'>
        Round every corner<br/>Lies fleeting hope of respite<br/>Focus on next step
      </div>
      <div className='end-quote'>
        <FontAwesomeIcon icon='quote-right' size='5x'/>
      </div>
    </div>
    <Content>
      This is a haiku that I wrote while on a backpacking trip where the first day was nothing
      but uphill on loose rocks.  Every corner seemed like it would be something different but it
      was always the same thing.  This can be like life.  Sometimes it just seems to be dragging on.
      The best thing to do is just focus on taking the next step.
    </Content>
    <style >{`
      .logo {
        width: 10%;
        margin: auto;
      }
      .logo svg {
        height: 100%;
        width: 100%;
      }
      .quote {
        font-family: 'Charm', cursive;
        margin: auto;
        font-size: 4em;
        color: white;
        padding: 0.25em;
        text-align: center;
        text-shadow: 2px 2px rgba(0,0,0,0.5);
      }
      .end-quote {
        width: 10%;
        margin: auto;
        font-size: 72;
        font-weight: bold;
        text-align: right;
        text-shadow: 2px 2px rgba(0,0,0,0.5);
      }
    `}</style>
  </Fragment>
);
