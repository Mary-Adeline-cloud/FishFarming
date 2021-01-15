import React from "react";

const SampleData = ({ posts, loading }) => {
    if (loading) {
        return (
            <div  style={{position:'static'}} className="container">
                <small >...loading</small>
            </div>
           
        );
    }
    return (
        <div className="container" >

        <table style={{ width: "100%" }}>
        <tr>
                              <th>id</th>
                              <th>Name</th>
                              <th>PH sensor</th>
                              <th>Dissolved O</th>
                              <th>Temperature</th>
                              <th>Date/Time</th>
                          </tr>

          {posts.map((post) => (
            
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.Name}</td>
              <td>{post.phSensor}</td>
              <td>{post.oxygenSensor}</td>
              <td>{post.temperatureSensor}</td>
              <td>{post.createdAt}</td>
            </tr>
          ))}
        </table>
      </div>
    );
};

export default SampleData;