import React from 'react'
import { useState } from "react";
import Utils from '../utils/Utils';
import { useNavigate, useParams } from 'react-router-dom'
import '../Style/UpdateImgBook.css'


const UpdateImgBook = () => {

    const [file, setFile] = useState(null)
    const [coverImage, setCoverImage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    const handleChangeImg = (e) => {
        const file = e.target.files[0]
        setFile(file)
        if (file) {
          const coverImage = URL.createObjectURL(file)
          setCoverImage(coverImage)
        } else {
          setCoverImage('')
        }
      }

     
  const handleUpdateImg = async () => {
    try {
      await Utils.uploadImage(id, file)
      navigate('/book')
    } catch (error) {
      console.log(error)
    }
  }
        
        return (
      <>
      <div className='body-up'>
        <div className='highlight'>Clique em explorar para ajustar a capa</div>
        <input className='input' type='file' onChange={handleChangeImg} />
        
        {coverImage && (
          <>
            <img className='imgEx' src={coverImage} alt='new cover'/>
            <button className='btn-submit' onClick={handleUpdateImg}>Update Capa</button> 
          </>
        )}
      </div>
    </>
  )
  
}


export default UpdateImgBook;