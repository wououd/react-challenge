
import TagButton from "./TagButton"
import {BiAddToQueue,BiArrowFromRight,BiArrowFromLeft} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
function SideMenu() {
  const content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio id cupiditate provident ex itaque saepe suscipit et quasi nesciunt necessitatibus."
  return (
      <div style={{ margin: "25px", border: "solid #1d9bf0 5px"}}>
      <div>
       <TagButton title="Add Article" >
        <BiAddToQueue />
       </TagButton>
      </div>
      <div>
       <TagButton >
        <p>{content}</p>
       <img src="./images/btn-bg.png" alt="btn-img" style={{width:"100px", heigh:"100px"}}/>
       </TagButton>
      </div>
      <div>
      <TagButton >
        <h1> Articles</h1>
        <div>

        <BiArrowFromRight style={{ margin: "25px"}}/>
        <AiOutlineDelete style={{ margin: "25px"}}/>
        <BiArrowFromLeft style={{ margin: "25px"}}/>
        </div>
       <img src="./images/pingu.jpg" alt="pingu" style={{width:"100px", heigh:"100px"}}/>
       </TagButton>
      </div>

       </div>
  )
}

export default SideMenu