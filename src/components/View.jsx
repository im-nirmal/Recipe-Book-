import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import RecipeCard from './RecipeCard'
import { getAllRecipeAPI } from '../services/allAPI'

function View({uploadRecipeResponse}) {

  const[allRecipes,setAllRecipes] = useState([])
  //to hold removeRecipe
  const [deleteRecipeResponse,setDeleteRecipeResponse] = useState("")

  const getAllRecipes = async () =>{
    const result = await getAllRecipeAPI()
    // console.log(result);
    if(result?.status==200){
      // console.log(result?.data);
      setAllRecipes(result?.data)
    }
  }

  useEffect(()=>{
    getAllRecipes()
  },[uploadRecipeResponse,deleteRecipeResponse])
  console.log(allRecipes);
  return (
    <>
    <Row>
        { allRecipes?.length>0? allRecipes?.map((recipe,index)=>(
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
          <RecipeCard displayData={recipe} setDeleteRecipeResponse={setDeleteRecipeResponse} />
          </Col>
        ))
          
          :
          <div className='fw-bolder text-danger'>No recipes added</div>
        }
    </Row>
    </>
  )
}

export default View