import Layout from '../components/Layout'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
