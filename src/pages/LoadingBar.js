import React from "react";
import LoadingProgress from 'react-js-loading-progress-bar';

function LoadingBar(){
    return(
        <LoadingProgress
        active={true}
        total={this.state.total}
        current={this.state.current}
        showCompact       
      />
    )
}

export default LoadingBar;