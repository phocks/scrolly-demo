import React, { useState } from 'react';
import Worm from '../Worm';
import styles from './styles.scss';
import Scrollyteller from '@abcnews/scrollyteller';
import { createPortal } from 'react-dom';

const App = props => {
  const { scrollyConfig } = props;

  const onMarker = config => {
    console.log(config);
  };

  const [progress, setProgress] = useState(0);

  return (
    <>
      {createPortal(
        <Scrollyteller
          panels={props.scrollyConfig.panels}
          onMarker={onMarker}
          onProgress={({ pctAboveFold }) => setProgress(pctAboveFold)}
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
