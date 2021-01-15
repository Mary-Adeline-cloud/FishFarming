import React, {useState, useEffect} from 'react';
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Details =() =>{
    const [posts, setPosts] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(30);

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

    //change page number

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="container">
         <Posts posts={currentPosts} loading={loading} />
         <Pagination  postsPerPage={postsPerPage} totalPosts = {posts.length} paginate={paginate}/>
        </div>
    )

}
export default Details;
