import React, { useRef, useEffect } from "react";
import window from 'global'

const { tableau } = window

function TableauChart() {
  const ref = useRef(null)
  const url = "https://public.tableau.com/views/STDscharts/STDs_Dashboard"
  console.log(ref);

  function initViz() {
    new tableau.Viz(ref.current, url)
  }

  useEffect(() => {
    initViz()
  }, [])

  return(
    <div>
      <div ref={ref}></div>
    </div>
  )
}
 export default TableauChart
