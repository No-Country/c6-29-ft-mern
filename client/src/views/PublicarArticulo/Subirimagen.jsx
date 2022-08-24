import {uploadFile} from '../firebase/config'
import {useState} from 'react'

const Subirimagen = (props) => {

const [file,setFile] = useState(null)
   
const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const result = await uploadFile(file)
        console.log(result);
        props.url(result)
    } catch(error){
        console.log(error);
    }
   
   }
  
    return(
    <form onSubmit ={handleSubmit}>
     <input type="file"
      name= "" id = ""
       onChange={(e)=> setFile(e.target.files[0])}/>
       <button>Upload</button>
    </form>
)
}
export default Subirimagen