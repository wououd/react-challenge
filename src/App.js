import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
import Article from "./Article";
function App() {
  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga.";
  const content1 ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio id cupiditate provident ex itaque saepe suscipit et quasi nesciunt necessitatibus."
 
  return (
    
    <div className="App">
      
      <Header />
      <div style={{margin:"20px", display:"flex"}}>
      <div  style={{width:"50%"}}> 
      <Article name="wououd" email="boobreezy69@gmail.com" age="27" content={content}/>
      <Article name="linda" email="linda@gmail.com" age="31" content={content1}/>
      </div>
      <div style={{width:"40%"}}>
        <SideMenu />
      </div>
      </div>
    </div>
  );
}

export default App;
