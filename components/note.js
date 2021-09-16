import Link from 'next/link'
import { Button, Message } from 'semantic-ui-react'
import Styles from '../styles/components/note.module.css'

const Note = ({ button, color, message, link, onClick, route, title }) => (
  <Message className={Styles.note} color={color}>
    <Message.Header className={Styles.header}>
      { title }
    </Message.Header>
    <Message.Content> 
      <p className={Styles.message}>
        { message }
      </p>
      { button != undefined ? (
        <Button 
        fluid 
        color={color}
        onClick={ onClick }
        >
          { button }
        </Button>
      ) : null }
      { link != undefined ? (
        <Link href={route}>
          <Button 
          fluid 
          color={color}
          >
            { link }
          </Button>
        </Link>
      ) : null }
    </Message.Content>
  </Message>
)

export default Note