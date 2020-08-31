import React from 'react'
import tableau from 'tableau-api'

export default initTableau() {
  const vizUrl = "https://public.tableau.com/views/STDscharts/STDs_Dashboard?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"

  const options = {
    hideTabs: true,
    width: "700px",
    height: "800px",
    onFirstInteractive: () => {
      const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
      const options = {
        ignoreAliases: false,
        ignoreSelection: false,
        includeAllColumns: false
      };
      sheet.getUnderlyingDataAsync(options).then((t) => {
        const tableauData = t.getData();
        let data = [];
        const pointCount = tableauData.length;
        for (let a = 0; a < pointCount; a++) {
          data = data.concat({x: tableauData[a][0].value,
            y: Math.round(tableauData[a][3].value, 2)
          })
        };
      })
    }
  }
  let viz = new window.tableau.Viz(this.container, vizUrl, options);
}
