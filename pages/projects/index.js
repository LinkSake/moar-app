import Head from 'next/head'
import { useState } from 'react'
import Note from '../../components/note'
import Form from '../../components/form'
import { Grid, Header, Modal, Button } from 'semantic-ui-react'
 
const Projects = () => {

  const [open, setOpen] = useState(false)

  const head = () => (
    <Head>
      <title>Moar! - Projects</title>
    </Head>
  )

  const newForm = () => (
    <Modal
    closeIcon
    open={open}
    onClose={() => { setOpen(!open) }} 
    >
      <Modal.Header>
        New Project
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* Form */}
          <p>
            Foo foo!
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
        color='red'
        onClick={() => { setOpen(!open) }} 
        >
          Delete project
        </Button>
        <Button
        color='purple'
        onClick={() => { setOpen(!open) }} 
        >
          Create project
        </Button>
      </Modal.Actions>
    </Modal>
  )

  const isProjectEmpty = projects => {
    if (projects.length === 0) {
      return (
        <Note
        color='purple'
        button='Create a project'
        onClick={() => { setOpen(!open) }}
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
      { newForm() }
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