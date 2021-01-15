import React from "react";
import Thermometer from "react-thermometer-component";


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
               
                <Thermometer
             style={{position:'static'}}
              theme="light"
              value={post.temperatureSensor}
              max="100"
              steps="2"
              format=" °C"
              size="normal"
              height="200"
            />
                </div>
    ))}

        </div>
    );
    
    
};

export default OxygenPosts;
