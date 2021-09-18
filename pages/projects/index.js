import Head from 'next/head'
import { Context } from '../../context'
import Note from '../../components/note'
import { useContext, useState } from 'react'
import ModalForm from '../../components/modal_form'
import { Button, Grid, Header, List } from 'semantic-ui-react'
 
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
    if ( confirm('Are you sure you want to delete this project?') ) {
      // Temporary, this should delete the project
      setEditModal(false)
      setProject({})
    } else {
      setEditModal(false)
      setProject({})
    }
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

  const projectsList = ( projects ) => (
    <>
      <List animated divided relaxed>
        { projects.map(project => (
          <List.Item key={project.id}>
            <List.Icon 
            name='book' 
            size='large' 
            verticalAlign='middle'
            />
            <List.Content>
              <List.Header 
              as='a'
              id={project.id}
              onClick={() => { setProject(project); setEditModal(true)}}
              style={{color: '#a333c8 !important' , textDecoration: 'underline'}}
              >
                { project.name }
              </List.Header>
              <List.Description>
                Tasks in this project: { project.count } 
                {' | '} 
                Total time elapsed: { project.elapsed }
              </List.Description>
            </List.Content>
          </List.Item>  
        ))}
      </List>
      <Button 
      basic 
      color='purple' 
      floated='right'
      content='+ New project' 
      onClick={() => { setNewModal(true) }}
      />
    </>
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
      return projectsList(projects)
    }
  }


  return (
    <>
      { head() }
      { newProject() }
      { editProject() }
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