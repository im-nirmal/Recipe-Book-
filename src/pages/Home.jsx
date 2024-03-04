import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

function Home() {
  //state to make change when there is adding recipe
  const[uploadRecipeResponse,setUploadRecipeResponse] = useState("")
  return (
    <>
      <div className="container d-flex justify-content-between mt-5">
        <Add setUploadRecipeResponse={setUploadRecipeResponse}/>
        
      </div>
      <div className="container-fluid mt-5 ms-5 mb-5 row">
        <div className="col-lg-10">
          <h3>Recipes of the day...</h3>
          <View uploadRecipeResponse={uploadRecipeResponse}/>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home