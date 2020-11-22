import React from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'

function maker(isContribute) {
  if (isContribute === "1") {
    return (<div>        <p>  What do you think is the most appropriate translation for the word?    </p>        <Input focus color='purple' size='small' placeholder='Most appropriate one?' />      </div>
    )
  } else if (isContribute === "0") {
    return ( <div>  <p>  We will let experts take a look at your suggestion and reflect in the future translation model.    </p>        <p>          If you have a keyword to suggest in your mind, please let me know what you think the best suitable one is.</p>  <Input focus color='purple' size='small' style={{width:"300px"}} placeholder='Most appropriate one? (Optional)'/></div>)
  } else {
    return (
      <div>
        <p>
          Thank you for your opinion. We will let experts take a look at your suggestion and reflect in the future translation model.
        </p>
      </div>


    )
  }
}

function ModalExampleModal(param) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon='book' color={!param.color ? "purple" : param.color} pointing='left' size="small" content={param.text} />}
    >
      <Modal.Header>Thank you for the contribution!</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          {maker(param.isContribute)}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Confirm"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal;