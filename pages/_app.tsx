import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Amplify } from "aws-amplify";
import 'react-toastify/dist/ReactToastify.css';

// Amplify configurations
import awsExports from "../aws-exports";
import { ToastContainer } from 'react-toastify';
Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />
  <ToastContainer />
  </>
}
