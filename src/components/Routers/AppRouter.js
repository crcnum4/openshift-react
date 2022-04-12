import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../Navbar/NavBar';
import Home from '../Home/Home';
import Lockers from '../Lockers/Lockers';
import Stuffs from '../Stuffs/Stuffs'
import Students from '../Student/Students';



const AppRouter = () => {
  return (
    <div style={{width: '100%'}}>
       <NavBar />
      <div style={{marginTop: "75px", width: '100%'}}>

        <Routes>
          <Route path="/" exact element={<Home />}/>
            {/* <Route path="/developers" element={<Devs />} /> */}
            <Route path="/students" element={<Students />} />
            <Route path="/locker" element={<Lockers />} />
            <Route path="/stuff" element={<Stuffs />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;