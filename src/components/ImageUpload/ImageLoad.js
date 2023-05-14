import React from 'react'
import "./ImageUpload.css"
const ImageLoad = (props) => {
    const { image, output } = props;
    return (
        <>
            <div>
                <img width={"500px"} height={"500px"} src={image} alt={image} />
                <img width={"500px"} height={"500px"} src={output} alt={output} />
            </div>
        </>
    )
}

export default ImageLoad