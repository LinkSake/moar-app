import Navbar from './navbar'
import { Grid } from 'semantic-ui-react'
import Styles from '../../styles/layout/layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Grid className={Styles.layout}>
        <Grid.Row centered>
          <Grid.Column width={12}> 
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Layout