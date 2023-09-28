import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './components/App';
import { loadScrollyteller } from '@abcnews/scrollyteller';

let root: Root;
let scrollyConfig;

function renderApp() {
  root.render(<App scrollyConfig={scrollyConfig} />);
}

whenOdysseyLoaded.then(() => {
  const [appMountEl] = selectMounts('scrollydemo');

  scrollyConfig = loadScrollyteller('', 'u-full', 'mark');

  if (appMountEl) {
    root = createRoot(appMountEl);
    renderApp();
  }
});

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      renderApp();
    } catch (err: any) {
      import('./components/ErrorBox').then(({ default: ErrorBox }) => {
        root.render(<ErrorBox error={err} />);
      });
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  console.debug(`[scrolly-demo] public path: ${__webpack_public_path__}`);
}
