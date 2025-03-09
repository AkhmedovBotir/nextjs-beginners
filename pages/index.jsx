import { api } from "@/components/api/api"
import axios from "axios"
import { useEffect, useState } from "react"

function index() {
    const [ data , setData ] = useState([])
    useEffect(() => {
        // fetch(`${api}photos`)
        // .then(response => response.json())
        // .then(data => setData(data))
        axios.get(`${api}posts`)
        .then(response => setData(response.data))
    }, [])

  return (
    <div>
        <h1>API</h1>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
    </div>
  )
}

export default index