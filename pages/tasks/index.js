import Head from 'next/head'
import Note from '../../components/note'
import { Grid, Header } from 'semantic-ui-react'
 
const Tasks = () => {

  const head = () => (
    <Head>
      <title>Moar! - Tasks</title>
    </Head>
  )

  const isMoarEmpty = (projects, tasks) => {
    if (projects) {
      return (
        <Note
        color='purple'
        button='Create a project'
        onClick={() => { alert('Create project modal') }}
        title="😱 You haven't created a project yet!"
        message="
          You can't track your task without a project; 
          after creating a project here will appear the 
          task you're currently working on.
        "/>
      )
    } else if (tasks) {
      // TODO: Otra función que cheque cada projecto para ver si tiene tareas
    } else {
      return null
    }
  }

  return (
    <>
      { head() }
      <Grid> 
        <Grid.Row>
          <Grid.Column width={16}>
            <Header color='purple' as='h1'>
              Tasks
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            { isMoarEmpty(true, true) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Tasks