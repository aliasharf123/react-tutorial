import React, { useEffect } from "react";

function Model({content , closeModel}) {

  useEffect(()=>{
    setTimeout(()=>{
      closeModel()
    },2000);
  })

  return <div style={{
    textAlign: "center",
    backgroundColor: '#fff',
    width:"10%",
    position: "absolute",
    borderRadius:'5px',
    paddingTop: '9px',
    margin: "1rem  45% ",
    fontWeight: '500'
  }}>
    <p style={{
      color: "red"
    }}>{content}</p>
  </div>;
}

export default Model;
