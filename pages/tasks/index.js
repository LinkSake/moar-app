import Head from 'next/head'
import Note from '../../components/note'
import { Grid, Header } from 'semantic-ui-react'
 
const Tasks = () => {

  const head = () => (
    <Head>
      <title>Moar! - Tasks</title>
    </Head>
  )

  const getProjects = (projects) => {
    if (projects.length === 0) {
      return (
        <Note
        color='purple'
        button='Create a project'
        title="😱 You haven't created a project yet!"
        onClick={() => { alert('Create project modal') }}
        message="
          You can't track your task without a project; 
          after creating a project here will appear the 
          task you're currently working on.
        "/>
      )
    } else { 
      return projects.map(project => {
        return getTasksComponents(project)
      })
    }
  }

  const getTasksComponents = (project) => {
    if (project.items.length === 0) {
      return (
        <div key={project.name}>
          <Header as='h2'>
            {project.name}
          </Header>
            <Note
            color='purple'
            button='Create a task'
            title="😅 There aren't tasks on this project."
            onClick={() => { alert('Create task modal') }}
            message="
            To make use of Moar and start tracking time,
            create a task!"
            />
        </div>
      )
    } else {
      let tasks = project.items.map(task => {
        //  Create a task component
        return (
          <li key={task.name}>
            { task.name }
          </li>
        )
      })
      tasks.unshift(
        <Header key={project.name} as='h2'>
          {project.name}
        </Header>
      )
      return tasks
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
            { getProjects([]) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Tasks