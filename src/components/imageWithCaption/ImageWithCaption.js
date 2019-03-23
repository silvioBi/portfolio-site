import React from 'react';
import './ImageWithCaption.css'

const ImageWithCaption = ({ width, imgUrl, title, text }) => <div>
    <img width={width} className='image-with-caption' src={imgUrl} alt={title} />
    <h1>{title}</h1>
    <p>{text}</p>
</div>

export default ImageWithCaption