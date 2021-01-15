import React from "react";
import { ContentGage } from 'ac-thermometer';
import 'ac-thermometer/dist/index.css';

const OxygenPosts = ({posts,loading}) => {
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
              value={post.oxygenSensor}
              max="100"
              steps="2"
              format="mg/l"
              size="normal"
              height="200"
            />
                </div>
    ))}

        </div>
    );
    
    
};

export default OxygenPosts;
