import '../styles/globals.css'
import { Provider } from '../context'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
