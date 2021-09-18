import { Button, Form, Modal } from 'semantic-ui-react'

const ModalForm = ({ confirmLabel, deleteLabel, open, onClose, onConfirm, onDelete, title }) => (
  <Modal
  closeIcon
  open={ open }
  onClose={ onClose } 
  >
    <Modal.Header>
      { title }
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Your new billion dollar idea' />
          </Form.Field>
          <Button
          type='submit'
          color='purple'
          floated='right'
          onClick={ onConfirm } 
          >
            { confirmLabel }
          </Button>
          { deleteLabel !== undefined || onDelete !== undefined ? (
            <Button
            color='red'
            onClick={onDelete} 
            floated='right'
            >
              { deleteLabel }
            </Button>
          ) : null}
        </Form>
        <br/>
        <br/>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalForm

