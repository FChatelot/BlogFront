import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import PostList from "./components/blog/postList";
import Edit from "./components/blog/edit"; 
import Create from "./components/blog/create";
import HomePage from "./components/homePage/home";
import LogIn from "./components/authentication/authenticate";
import Footer from "./components/footer";
const App = () =>{
    return(
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/blog" element={<PostList />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <Footer/>
        </div>
    );
};
export default App;