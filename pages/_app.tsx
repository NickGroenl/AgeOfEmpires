import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { ReactElement } from 'react';

import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;