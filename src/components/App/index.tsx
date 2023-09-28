import React, { useState } from 'react';
import Worm from '../Worm';
import styles from './styles.scss';
import Scrollyteller from '@abcnews/scrollyteller';
import { createPortal } from 'react-dom';

const App = props => {
  const { scrollyConfig } = props;

  const [param, setParam] = useState(0);
  const [progress, setProgress] = useState(0);

  const onMarker = config => {
    setParam(config.param);
  };

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
            <pre>{JSON.stringify({ param: param })}</pre>
            <h1>Progress: {progress}</h1>
          </div>
        </Scrollyteller>,
        scrollyConfig.mountNode
      )}
    </>
  );
};

export default App;
