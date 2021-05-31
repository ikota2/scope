// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}


export default MyApp;