import * as React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  console.log(data, "genre j'ai un truc dans le blog ?")
  return (
    <p>404 ici askip</p>
  )
}


export const query = graphql`
  query ($id: String) {
    contentfulPage(id: {eq: $id}) {
        id
        slug
        title
        description {
          description
        }
    }
  }
`

export default Page