import React, { useEffect } from "react";

const LIST = (props) => {

    const handleDelete=()=>{
        props.Delete(props.index);
    }

    // useEffect(()=>{
    //     console.log(props.index, "index");

    //     return ()=>{
    //         console.log(props.item, "index_prev");
    //     }
    // },[])

  return (
    <h1>
      {props.index}-{props.item.name} 
      <button onClick={handleDelete}>Delete</button>
    </h1>
  );
};

export default LIST;
