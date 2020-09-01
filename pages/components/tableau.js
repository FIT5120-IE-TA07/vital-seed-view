import React, { useRef, useEffect } from "react";
import window from 'global'

const { tableau } = window

function TableauEmbed() {
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
      <p>Tableau Dashboard</p>
      <div ref={ref}></div>
    </div>
  )
}
 export default TableauEmbed
