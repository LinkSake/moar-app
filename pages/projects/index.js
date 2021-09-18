import Head from 'next/head'
import { Context } from '../../context'
import Note from '../../components/note'
import { useContext, useState } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ModalForm from '../../components/modal_form'
 
const Projects = () => {

  const { state, dispatch } = useContext(Context)

  const [project, setProject] = useState({})
  const [newModal, setNewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleNewProject = () => {
    alert( project.name + ' created!')
    setNewModal(false)
    setProject({})
  }

  const handleEditProject = () => {
    alert('Project '+project.name+' updated!')
    setEditModal(false)
    setProject({})
  }

  const handleDeleteProject = () => {
    alert('Project '+project.name+' deleted!')
    setEditModal(false)
    setProject({})
  }


  const head = () => (
    <Head>
      <title>Moar! - Projects</title>
    </Head>
  )

  const newProject = () => (
    <ModalForm
    item={project}
    open={newModal}
    title='New Project'
    setItem={setProject} 
    confirmLabel='Confrim'
    onClose={() => { setNewModal(false) }} 
    onConfirm={() => { handleNewProject() }}
    />
  )

  // Edit project should be called `() => { setProject({name: 'Snow', items: []}); setEditModal(true) }`
  const editProject = () => (
    <ModalForm
    item={project}
    open={editModal}
    setItem={setProject}
    title='Edit Project'
    deleteLabel='Delete'
    confirmLabel='Update'
    onClose={() => { setEditModal(false) }} 
    onConfirm={() => { handleEditProject() }} 
    onDelete={() => { handleDeleteProject() }} 
    />
  )

  const isProjectEmpty = projects => {
    if (projects.length === 0) {
      return (
        <Note
        color='purple'
        button='Create a project'
        onClick={() => { setNewModal(true) }}
        title="😱 You haven't created a project yet!"
        message="
          You can't track your task without a project; 
          after creating a project here will appear the 
          task you're currently working on.
        "/>
      )
    } else {
      // List projects
      return projects.map(project => (
        <li> {project.name} </li>
      ))
    }
  }


  return (
    <>
      { head() }
      { newProject() }
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
            { isProjectEmpty(state.projects) }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Projects