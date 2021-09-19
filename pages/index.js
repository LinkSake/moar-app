import Head from 'next/head'
import { useContext } from 'react'
import { Context } from '../context'
import Note from '../components/note'
import Styles from '../styles/pages/home.module.css'
import { Grid, Header, Icon } from 'semantic-ui-react'
 
const Home = () => {

  const { state, dispatch } = useContext(Context)

  const head = () => (
    <Head>
      <title>Moar! - Sample time tracker</title>
    </Head>
  )

  const logo = () => (
    <div className={Styles.container}>
      <Header icon as='h1' color='purple'>
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

  const getTimer = (projects, working) => {
    if (projects.length === 0) {
      return (
        <Note
        color='purple'
        route='/projects'
        link='Create a project'
        title="😱 You haven't created a project yet!"
        message="
        You can't track your task without a project; 
        after creating a project here will appear the 
        task you're currently working on.
        "
        onClick={() => {
          dispatch({ type: 'SET_ACTIVE_TAB', payload: '/projects' })
        }}
        />
      )
    } else if (projects[0].items.length === 0) {
      return (
        <Note
        color='purple'
        link='Create a task'
        title="😅 There aren't tasks on your project."
        route='/tasks'
        message="
        To make use of Moar and start tracking time,
        create a task!"
        onClick={() => {
          dispatch({ type: 'SET_ACTIVE_TAB', payload: '/tasks' })
        }}
        />
      )
    } else if ( Object.keys(working).length === 0 ) {
      return (
        <Note
        color='purple'
        route='/tasks'
        link='Start a task'
        title="😴 You haven't started a task."
        message="
        To make use of Moar and start tracking the time
        go to your tasks and start one, time to work!"
        onClick={() => {
          dispatch({ type: 'SET_ACTIVE_TAB', payload: '/tasks' })
        }}
        />
      )
    } else {
      return (
        <Note
        color='purple'
        route='/tasks'
        link='Stop a task'
        title="🤓 You're working on a task."
        message={`
        Currently you're working on ${working.name}, good job!
        `}
        onClick={() => {
          dispatch({ type: 'SET_ACTIVE_TAB', payload: '/tasks' })
        }}
        />
      )
    }
  }

  return (
    <>
      { head() }  
      <Grid>
        <Grid.Row>
          <Grid.Column width={16} textAlign='center'>
            { logo() }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={12} >
            <br/>
            { getTimer(state.projects, state.working) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Home