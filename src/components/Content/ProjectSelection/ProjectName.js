import React from 'react';

const ProjectName = (props) => {

    return (
      <>
      <span
      style={{
        color: "#000000",
        fontWeight: "bold"
      }}>{props.name} - 
      </span>
        <span
        style={{
          color: "#109CF1", 
          margin: "0px 5px"
        }}>{props.id}
        </span>
        <span 
        style={{
          color: "#60D1D0", 
          marginLeft: "5px"
        }}>{props.state}: {props.city}
        </span>
      </>
    );
}

export default ProjectName;