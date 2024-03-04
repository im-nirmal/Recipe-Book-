import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//add recipe
export const addRecipeAPI = async (recipe)=>{
    return await commonAPI("POST",`${SERVER_URL}/recipes`,recipe)
}

//get recipe in view component
export const getAllRecipeAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/recipes`,"")
}

//delete recipe
export const removeRecipeAPI = async(recipeid)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/recipes/${recipeid}`,{})
}