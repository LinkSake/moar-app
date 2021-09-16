import Head from 'next/head'
import Styles from '../styles/home.module.css'
import { Grid, Header, Icon } from 'semantic-ui-react'
 
const Home = () => {

  const head = () => (
    <Head>
      <title>Moar! - Sample time tracker</title>
    </Head>
  )

  const logo = () => (
    <div className={Styles.container}>
      <Header 
      icon
      as='h1'
      color='purple'
      >
        <Icon name='stopwatch'/>
        <i className={Styles.title}> 
          Moar! 
        </i>
      </Header>
      <Header.Subheader className={Styles.subheader} >
        A sample time tracker
      </Header.Subheader>
    </div>
  )

  return (
    <>
      { head() }  
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign='center' width={16}>
            { logo() }
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Home