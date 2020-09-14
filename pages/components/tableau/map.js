import React, { useRef, useEffect } from "react";
import window from 'global'

const { tableau } = window

function TableauMap() {
  const ref = useRef(null)
  const url = "https://public.tableau.com/views/MelbMap/MelbMap"
  console.log(ref);

  function initViz() {
    new tableau.Viz(ref.current, url)
  }

  useEffect(() => {
    initViz()
  }, [])

  return(
    <div>
      <center><h5><b>Public hospitals in and around Melbourne offering STI treatment</b></h5></center>
      <center><h7>Hover on the location to check the address, telephone number and website of that particular clinic. </h7></center>
      <div ref={ref}></div>
    </div>
  )
}
 export default TableauMap
