import React from "react"
import { defaultConfig } from "./configs"
function StarterBlock(props) {
  const { data: blog = {} } = props
  return (
    <React.Fragment>
      <h1>{props.text}</h1>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </React.Fragment>
  )
}
StarterBlock.defaultProps = defaultConfig
export default StarterBlock
