import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import PostList from "./components/blog/postList";
import Edit from "./components/blog/edit"; 
import Create from "./components/blog/create";
import HomePage from "./components/homePage/home";
import Footer from "./components/footer";
import SinglePost from "./components/blog/single";

import { ToastContainer } from 'react-toastify';
import Login from "./components/authentification/login";
import Register from "./components/authentification/register";
const App = () =>{
    return(
        <div className="d-flex flex-column min-vh-100 bg-dark-subtle">
            <Navbar />
                <ToastContainer />
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/blog" element={<PostList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
                <Route path ="/single/:id" element = {<SinglePost/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};
export default App;