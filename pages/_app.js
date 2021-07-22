import "../styles/globals.css";

import "tailwindcss/tailwind.css"
// import "../styles/globals.css";
import Layout from "../components/Layout";
/*import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
*/
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
