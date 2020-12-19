import React from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'

function maker(isContribute) { //contribution modal for contributor
  if (isContribute === "1") {
      return (<div>        <p>  What do you think is the most appropriate translation for the word?    </p>
          <div style={{textAlign: "center", marginTop :"10px"}}> Please choose the domain of this word </div>
          <div><select name="domain" style={{ display: "block", margin: "0 auto", textAlign: "center" }}>
              <option value="default"> General </option>
              <option value="math"> Mathematics </option>
              <option value="sociology">Sociology </option>
          </select></div>
          <div style={{ textAlign: "center", marginTop: "20px" }}> Please choose appropriate audience for this suggestion </div>
          <div><select name="domain" style={{ display: "block", margin: "0 auto", textAlign: "center" }}>
              <option value="kindergarten"> Kindergarten </option>
              <option value="elementary"> Elementary School </option>
              <option value="middle">Middle School </option>
              <option value="high">High School </option>
              <option value="college"> College and above </option>  
          </select></div>
          <div style={{ textAlign: "center", marginTop: "20px" }}> Please write down the most appropriate translation for this word </div>
          <Input focus color='purple' size='small' placeholder='Most appropriate one?' style={{ display: "block", margin: "0 auto", textAlign: "center" }} /><div />
          <div style={{ textAlign: "center", marginTop: "20px" }}> Please choose the level of your expertise </div>
          <div><select name="domain" style={{ display: "block", margin: "0 auto", textAlign: "center" }}>
              <option value="bachelor"> Bachelor </option>
              <option value="master"> Master </option>
              <option value="phd">Ph.D </option>
              <option value="expert">Expert </option>
          </select></div>     </div>
    )
  } else if (isContribute === "0") {
    return ( <div>  <p>  We will let experts take a look at your suggestion and reflect in the future translation model.    </p>
              <p>
                  If you have a keyword to suggest in your mind, please let me know what you think the best suitable one is.</p>
              <Input focus color='purple' size='small' style={{ width: "300px" }} placeholder='Most appropriate one? (Optional)' /></div>)
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