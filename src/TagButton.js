import "./TagButtonStyle.css"

function TagButton({title,content,children}) {
  return (
    <>
      <button className="tagButton">
           {title} 
           {children}
          
       </button>
       
        </>
  )
}

export default TagButton