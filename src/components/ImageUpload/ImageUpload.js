import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImageUpload.css"
import ImageLoad from "./ImageLoad";

const ImageUpload = () => {
  const api = "http://localhost:8000/api/upload_image/";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [submited, setSubmited] = useState(false);
  const [outputImg, setOutputImg] = useState("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1616012480717-fd9867059ca0%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8eCUyMHJheXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=SjaRCEBWH2OFCM&vet=12ahUKEwiYu9Sv9bv-AhVv53MBHavWAhgQMygbegUIARCfAg..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fx-ray&docid=NXnfEjVaZjy4DM&w=1000&h=800&q=xray&ved=2ahUKEwiYu9Sv9bv-AhVv53MBHavWAhgQMygbegUIARCfAg");
  const [id, setId] = useState(11);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

    useEffect(() => {
      axios.get(`http://localhost:8000/api/posts/${id}`)
        .then((response) => {
          let path = response.data.image.replace("incoming_blurred_images", "outgoing_de_blurred_images")
          setOutputImg(prevFilePath => prevFilePath === path ? prevFilePath : path)
        })
        .catch((error) => console.log(error))
    }, [id])
  

  // const loadDeblurred = (e) => {
  //   axios.get(`http://localhost:8000/api/posts/${id}`)
  //     .then((response) => {
  //       let path = response.data.image.replace("incoming_blurred_images", "outgoing_de_blurred_images")
  //       setOutputImg(prevFilePath => prevFilePath === path ? prevFilePath : path)
  //     })
  //     .catch((error) => console.log(error))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    axios.post(api, formData)
      .then((response) => {
        setId(response.data.id)
        setSubmited(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {imageUrl && submited ? (
        <>
          {/* <h2>{title}</h2> */}
          {/* <button onClick={loadDeblurred}>Deblur</button> */}
          <ImageLoad image={imageUrl} output={outputImg} />
        </>
      ) : (
        
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
          <button type="submit">Upload</button>
        </form>
</div>

      )}
    </div>
  );
};

export default ImageUpload;
