
import React from "react"
import Navbar from "./components/Navbar.jsx"
import Content from "./components/Content.jsx"
import data from "./data"

export default function App(){
  const journalEl = data.map( (item) => {
            return(
                <Content 
                key = {item.id}
                item = {item}

                />
      )
  })
 
    return(
        <div>
            <Navbar />
            <section className="journal--parts">
                {journalEl}
            </section>
        </div>
    )
}