
const Arrow = ({ src, alt, fn }) => {
    return (
      <div  onClick={fn}>
        <img className= "img-thumbnail" width="32" height="32" src={src} alt={alt} />
      </div>
    )
  }
  
  export default Arrow