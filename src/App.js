import './App.css';
import fullImage from "./imageInSrc.jpg"

function App() {
  return (
    <div>
    <div style={{border: "solid 1px black" ,maxWidth:"100vw" }}>
      <h1 className='title red'>Abdelhedi Sofiane</h1>
      <br/>
      <img src='/imageInPublic.jpg' alt='imageInPublic'/>
      <br/>
      <img src={fullImage} alt='imageInSrc'/>
    </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}


export default App;
