import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


function App() {
  //  const  category = "sports";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />

      <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<News key = "home" category = "general" setProgress = {setProgress} />}/>
      <Route path = "/general" element = {<News key = "general" category = "general" setProgress = {setProgress} />}/>
      <Route path = "/sport" element = {<News key = "sports" category = "sports" setProgress = {setProgress}/>}/>
      <Route path = "/bussiness" element = {<News key = "business" category = "business" setProgress = {setProgress}/>}/>
      <Route path = "/science" element = {<News   key = "science" category = "science" setProgress = {setProgress}/>}/>
      <Route path = "/sports" element = {<News   key = "sports" category = "sports" setProgress = {setProgress}/>}/>
      <Route path = "/technology" element = {<News  key = "technology" category = "technology" setProgress = {setProgress}/>}/>
      <Route path = "/health" element = {<News  key = "health" category = "health" setProgress = {setProgress}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
