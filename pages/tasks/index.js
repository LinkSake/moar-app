import Head from 'next/head'
import { useContext } from 'react'
import { Context } from '../../context'
import Note from '../../components/note'
import { Button, Grid, Header, Table } from 'semantic-ui-react'
 
const Tasks = () => {

  const { state, dispatch } = useContext(Context)

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
        link='Create a project'
        title="😱 You haven't created a project yet!"
        route='/projects'
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
      return (
        <>
          <Header key={project.name} as='h2'>
            { project.name }
          </Header>
          <Table basic unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Task name</Table.HeaderCell>
                <Table.HeaderCell>Time elapsed</Table.HeaderCell>
                <Table.HeaderCell/>
                <Table.HeaderCell/>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {project.items.map(task => (
                <Table.Row key={task.name}>
                  <Table.Cell>{task.name}</Table.Cell>
                  <Table.Cell>
                    { task.running ? (
                      <i>Currently working on this task...</i>
                    ) : task.elapsed }
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <Button
                    color='purple'
                    disabled={task.running ? true : false}
                    onClick={() => { alert('Edit task modal') }}
                    >
                      Edit/Delete
                    </Button>
                  </Table.Cell>
                  <Table.Cell collapsing>
                    { task.running ? (
                      <Button
                      basic
                      color='red'
                      onClick={() => { alert('Remove task modal') }}
                      >
                        Stop
                      </Button>
                    ) : (
                      <Button
                      basic
                      color='purple'
                      onClick={() => { alert('Remove task modal') }}
                      >
                        Start
                      </Button>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Button 
          basic 
          color='purple' 
          floated='right'
          content='+ Add task' 
          onClick={() => { alert('New task') }}
          />
          <br/>
          <br/>
        </>
      )
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
            { getProjects(state.projects) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Tasks