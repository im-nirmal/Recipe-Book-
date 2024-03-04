import React,{useState } from 'react'
import { Modal, Card  } from 'react-bootstrap'
import { removeRecipeAPI } from '../services/allAPI';

function RecipeCard({displayData,setDeleteRecipeResponse}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //removing recipe
  const removeRecipe = async(rId)=>{
    const result = await removeRecipeAPI(rId)
    setDeleteRecipeResponse(result.data)
    
  }

  return (
    <>
    <Card className='shadow'>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'300px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.title}</p>
            <button onClick={()=>removeRecipe(displayData?.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>
        
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>{displayData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img style={{height:'300px', width:'100%'}} src={displayData?.imageURL} alt="" />
            <h5 className='mt-5'>Preparation Time : <span className='text-info'>{displayData?.cookTime} Minutes</span></h5>
            <p className='mt-5'>{displayData?.instructions}</p>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default RecipeCard