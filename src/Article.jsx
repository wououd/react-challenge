
const Article = ({name,email,age, content}) => {
  return (
    <div
    style={{
        background:"black",
        boxShadow: "0px 5px 10px gray",
        color:"white",

    }}>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{age}</h3>
        <hr style={{width:"90%"}} />
        <p>{content}</p>
        
    </div>
  )
}

export default Article