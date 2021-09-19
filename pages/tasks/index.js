import Head from 'next/head'
import { Context } from '../../context'
import Note from '../../components/note'
import { useContext, useState } from 'react'
import { getDifference } from '../../utils/dates'
import ModalForm from '../../components/modal_form'
import { working } from '../../context/reducers/working'
import { Button, Grid, Header, Table } from 'semantic-ui-react'
  
const Tasks = () => {

  const { state, dispatch } = useContext(Context)

  const [newModal, setNewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [currentTask, setCurrentTask] = useState({})

  const handleNewTask = () => {
    alert( currentTask.name + ' created!')
    setNewModal(false)
    setCurrentTask({})
  }

  const handleEditTask = () => {
    alert('Task ' + currentTask.name + ' updated!')
    setEditModal(false)
    setCurrentTask({})
  }

  const handleDeleteTask = () => {
    if ( confirm('Are you sure you want to delete this task?') ) {
      // Temporary, this should delete the project
      setEditModal(false)
      setCurrentTask({})
    } else {
      setEditModal(false)
      setCurrentTask({})
    }
  }

  const head = () => (
    <Head>
      <title>Moar! - Tasks</title>
    </Head>
  )

  const newTask = () => (
    <ModalForm
    open={newModal}
    title='New Task'
    item={currentTask}
    confirmLabel='Confrim'
    setItem={setCurrentTask} 
    onClose={() => { setNewModal(false) }} 
    onConfirm={() => { handleNewTask() }}
    />
  )

  const editTask = () => (
    <ModalForm
    open={editModal}
    title='Edit Task'
    item={currentTask}
    deleteLabel='Delete'
    confirmLabel='Update'
    setItem={setCurrentTask}
    onConfirm={() => { handleEditTask() }} 
    onDelete={() => { handleDeleteTask() }} 
    onClose={() => { setEditModal(false) }} 
    />
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
            onClick={() => { setNewModal(true) }}
            title="😅 There aren't tasks on this project."
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
                    ) : (
                      getDifference(task.start, task.end)
                    ) }
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <Button
                    color='purple'
                    disabled={task.running ? true : false}
                    onClick={() => { setCurrentTask(task); setEditModal(true) }}
                    >
                      Edit/Delete
                    </Button>
                  </Table.Cell>
                  <Table.Cell collapsing>
                    { task.running ? (
                      <Button
                      basic
                      color='red'
                      onClick={() => { alert('Task stopped') }}
                      >
                        Stop
                      </Button>
                    ) : (
                      <Button
                      basic
                      color='purple'
                      disabled={state.working === {} ? false : true}
                      onClick={() => { alert('Task started') }}
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
          onClick={() => { setNewModal(true) }}
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
      { newTask() }
      { editTask() }
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