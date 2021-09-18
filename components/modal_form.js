import { Button, Form, Modal } from 'semantic-ui-react'

const ModalForm = ({ confirmLabel, deleteLabel, item, open, onClose, onConfirm, onDelete, setItem, title }) => (
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
        <Form onSubmit={ onConfirm }>
          <Form.Field>
            <label>Name</label>
            <input 
            placeholder='Your new billion dollar idea' 
            value={item.name !== undefined ? item.name : ''}
            onChange={ (e) => setItem({ ...item, name: e.target.value }) }
            />
          </Form.Field>
          <Form.Button color='purple' floated='right'>
            { confirmLabel }
          </Form.Button>
          { deleteLabel !== undefined || onDelete !== undefined ? (
            <Button
            color='red'
            floated='right'
            onClick={onDelete} 
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

