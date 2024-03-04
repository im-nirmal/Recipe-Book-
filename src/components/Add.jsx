import React,{useState} from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { addRecipeAPI } from '../services/allAPI';


function Add({setUploadRecipeResponse}) {

  //recipe state
  const[uploadRecipe,setUploadRecipe] = useState({
    title:"",imageURL:"",cookTime:"",instructions:""
  })



  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadRecipe({...uploadRecipe,title:"",imageURL:"",cookTime:"",instructions:""})
  }
  const handleShow = () => setShow(true);


  console.log(uploadRecipe);

  const handleAdd = async () =>{
    //store recipe in localhost 3000
    const {title,imageURL,cookTime,instructions} = uploadRecipe
    if(title && imageURL && cookTime && instructions){
      //need to store to json-server
      const result = await addRecipeAPI(uploadRecipe)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert(`Recipe added successfully`)
        setUploadRecipeResponse(result.data)
        handleClose()
      }else{
        alert("API call failed... Please try again later!!!")
      }

    }else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <>
        <div className="d-flex border rounded p-3" style={{marginLeft:'40%'}}>
            <h4 className='mt-2'>Add a new Recipe</h4>
            <button onClick={handleShow} className='btn   rounded-circle ms-2 '><i className='fa-solid fa-upload fa-2x '></i></button>
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Recipe Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following details...</p>
          <div className="border rounded border-secondary p-3">
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Recipe Title"
        className="mb-3"
      >
        <Form.Control value={uploadRecipe.title} onChange={e=>setUploadRecipe({...uploadRecipe,title:e.target.value})} type="text" placeholder="Recipe Title" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputImg"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control value={uploadRecipe.imageURL} onChange={e=>setUploadRecipe({...uploadRecipe,imageURL:e.target.value})} type="text" placeholder="Image URL" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputTime"
        label="Cook Time (minutes)"
        className="mb-3"
      >
        <Form.Control value={uploadRecipe.cookTime} onChange={e=>setUploadRecipe({...uploadRecipe,cookTime:e.target.value})} type="number" placeholder="Cook Time (minutes)" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Instructions">
        <Form.Control value={uploadRecipe.instructions} onChange={e=>setUploadRecipe({...uploadRecipe,instructions:e.target.value})}
          as="textarea"
          placeholder="Instructions"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add