import React from 'react'
import { useState } from "react";
import Utils from '../utils/Utils';
import { useNavigate, useParams } from 'react-router-dom'


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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='change-img'>Change Image</label>
        <p></p>
        <input id='change-img' type='file' onChange={handleChangeImg} />
        {coverImage && (
          <>
            <img src={coverImage} alt='new cover' width='200' height='200' />
            <button onClick={handleUpdateImg}>Update Image</button> 
          </>
        )}
      </div>
    </>
  )
  
}


export default UpdateImgBook;