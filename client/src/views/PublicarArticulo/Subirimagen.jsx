import {uploadFile} from '../firebase/config'
import {useState} from 'react'
import { render } from '@testing-library/react'
import "../../Styles/SubirImagen.css"

const Subirimagen = ({getImgUrl}) => {

const [file,setFile] = useState(null)
   
const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const result = await uploadFile(file)
        const imgInput = document.querySelector("[data-img-input]")
        imgInput.name = result
        getImgUrl();
        render(<span className='img-input-check'>COMPLETADO</span>) 
    } catch(error){
        console.log(error);
    }

   }
  
    return(
    <form onSubmit ={handleSubmit}>
     <input type="file"
      name= "" id = ""
       onChange={(e)=> setFile(e.target.files[0])} data-img-input/>
       <button>Upload</button>
    </form>
)
}
export default Subirimagen