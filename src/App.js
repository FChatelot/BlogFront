import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import PostList from "./components/postList";
import Edit from "./components/edit"; 
import Create from "./components/create";
const App = () =>{
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<PostList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
};
export default App;