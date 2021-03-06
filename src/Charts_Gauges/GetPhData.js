import React, {useState, useEffect} from 'react';
import axios from "axios";
import PhPosts from "./PhPosts"

const GetPhData =() =>{
    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(1);

    useEffect(()=>{
    const fetchPosts= async  () =>{
        setLoading(true);
        const res = await axios.get("https://pure-cliffs-73224.herokuapp.com/api/descend/v2/");
        setPosts(res.data.data.sensorByOrder);
        setLoading(false);
    }
    fetchPosts();
    
    }, []);

    //get the current post

    const  indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts. slice (indexOfFirstPost, indexOfLastPost);
    return(
        <div className="container">
         <PhPosts posts={currentPosts} loading={loading} />
        </div>
    )

}
export default GetPhData;