import React from 'react'
import tableau from "tableau-api"

function Viz() {
  var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/STDscharts/STDs_Dashboard?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

  var viz = new tableau.Viz(containerDiv, url)
}

export default Viz
