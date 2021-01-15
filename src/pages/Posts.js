import { post } from "jquery";
import React from "react";

const Posts = ({posts,loading}) => {
    if (loading) {
        return(
        <h2>loading ....</h2>
        );
        
    } 

    return(
        <div className="container" >

              <table style={{ width: "100%" }}>
              <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>PH sensor</th>
                                    <th>Dissolved O</th>
                                    <th>Temperature</th>
                                </tr>

                {posts.map((post) => (
                  
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.Name}</td>
                    <td>{post.phSensor}</td>
                    <td>{post.oxygenSensor}</td>
                    <td>{post.temperatureSensor}</td>
                  </tr>
                ))}
              </table>
            </div>
    );
    
    
};

export default Posts;
