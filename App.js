import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import File from './File';
import Page from './Page';
import Login from './Login'; 
import Sheet from './Sheet'; 
import Note from './Note'; 
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import pic5 from './pic5.png';
import pic6 from './pic6.png';
import pic7 from './pic7.png';
import pic8 from './pic8.png';
import photo1 from './photo1.png';
import photo2 from './photo2.png';
import datepic from './datepic.png';


import './Loginstyle.css';
import './Filestyle.css';
import './Pagestyle.css';
import './Sheetstyle.css';
import './Notestyle.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login
           pic1={pic1} pic2={pic2}
           pic3={pic3} pic4={pic4}
           pic5={pic5} pic6={pic6}
           pic7={pic7} pic8={pic8}/>}/>

          <Route path="/File" element={<File  pic8={pic8}/>} />
          <Route path="/Page" element={<Page  image1={image1}  image2={image2}  image3={image3} />} />
          <Route path="/Sheet" element={<Sheet   photo1={photo1}  photo2={photo2}/>} />
          <Route path="/Note" element={<Note photo1={photo1}  photo2={photo2}  datepic={datepic} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
