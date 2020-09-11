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
      <br/>
      <div ref={ref}></div>
    </div>
  )
}
 export default TableauMap
