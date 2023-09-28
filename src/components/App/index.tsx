import React from 'react';
import Worm from '../Worm';
import styles from './styles.scss';
import Scrollyteller from '@abcnews/scrollyteller';
import { createPortal } from 'react-dom';

const App = props => {
  console.log(props);
  const { scrollyConfig } = props;
  return (
    <>
      {createPortal(
        <Scrollyteller
          panels={props.scrollyConfig.panels}
          // onMarker={({ thing }) => setSomething(thing)}
          // onProgress={({ pctAboveFold }) => setProgress(pctAboveFold)}
        >
          <div className={styles.root}>
            <Worm />
            <pre>{JSON.stringify({ hello: 'hello' })}</pre>
            <h1>scrolly-demo</h1>
          </div>
        </Scrollyteller>,
        scrollyConfig.mountNode
      )}
    </>
  );
};

export default App;
