import React from "react";
import { ContentGage } from 'ac-thermometer';
import 'ac-thermometer/dist/index.css';

const PhPosts = ({posts,loading}) => {
    if (loading) {
        return(
        <small>loading....</small>
        );
        
    } 

    return(
        <div className="container">
        {posts.map(post => (
            <div key={post.id} className="list-group-item">
               
                <ContentGage
             style={{position:'static'}}
              theme="light"
              value={post.phSensor}
              max="14"
              steps="2"
              size="normal"
              height="200"
            />
                </div>
    ))}

        </div>
    );
    
    
};

export default PhPosts;
