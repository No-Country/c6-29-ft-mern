import {uploadFile} from '../firebase/config'
import {useState} from 'react'
import { render } from '@testing-library/react'
import { Swal } from 'sweetalert2'
import "../../Styles/SubirImagen.css"

const Subirimagen = ({getImgUrl}) => {

const [file,setFile] = useState(null)

const Upload = ( ) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        background: '#f6f6f6',
        timerProgressBar: true,
        
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: `Se Agrego con exito tu imagen`
      })
}
   
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
        <div className='row justify-content-start'>
            <div className='col-4 mr-2'>
                <form className='box-form' onSubmit ={handleSubmit}>
                    <input className='box-input' type="file" name= " "  id = " " onChange={(e)=> setFile(e.target.files[0])} data-img-input/>
                </form>
            </div>
            <div className='col-4 align-self-center m-0 p-0'>
            <button className='btn btn-Upload' onClick={Upload}>Upload</button>
            </div>
        </div>

)
}
export default Subirimagen