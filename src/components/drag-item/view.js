import React, { forwardRef } from "react"

import "./styles.css"

export default forwardRef(({ data, classValue }, ref) => 
  <div className={`item ${classValue}`} ref={ref}>
    {data.text}
  </div>
)
