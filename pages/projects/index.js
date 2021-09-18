import Head from 'next/head'
import Note from '../../components/note'
import { Grid, Header } from 'semantic-ui-react'
 
const Projects = () => {

  const head = () => (
    <Head>
      <title>Moar! - Projects</title>
    </Head>
  )

  const isProjectEmpty = projects => {
    if (projects.length === 0) {
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
              Projects
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            { isProjectEmpty([]) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Projects