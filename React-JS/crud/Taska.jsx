import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Taska() {
    let [showdata, setshowdata] = useState([])
    let [mappeddata, setmaeddata] = useState([])
    let [updatedata, setupdatedata] = useState({ update: null, name: "", city: "" })
    let fetch = () => {
        axios("http://localhost:8000/Student")
            .then(respdata => setshowdata(respdata.data))
            .catch(error => console.error(error))
    }
    useEffect(() => {
        fetch()
    }, [])
    let del = (id) => {
        axios.delete(`http://localhost:8000/Student/${id}`)
            .then(() => {
                fetch()
            }
            )
    }
    let edit = (mappeddata) => {
        setupdatedata({ update: mappeddata.id, name: mappeddata.name, city: mappeddata.city })
    }
    let submit = (id) => {
        axios.put(`http://localhost:8000/Student/${id}`, { name: updatedata.name, city: updatedata.city })
            .then(() => {
                setupdatedata({ update: null, name: "", city: "" })
                fetch()
            })
    }
    return (
        showdata.map((mappeddata, id) => {
            return (
                <div key={id}>
                    <div>
                        <input type="text" name="" id="" value={updatedata.name} onChange={(e) => { setupdatedata({ ...updatedata, name: e.target.value }) }} />
                        <input type="text" name="" id="" value={updatedata.city} onChange={(e) => { setupdatedata({ ...updatedata, city: e.target.value }) }} />
                        <button type="submit" onClick={() => { mappeddata.id }}>submit</button>
                    </div>

                    <p>name:{mappeddata.name}</p>
                    <p>city:{mappeddata.city}</p>
                    <button onClick={() => { edit(mappeddata) }}>edit</button>
                    <button onClick={() => { del(mappeddata.id) }}>delete</button>
                </div>
            )
        })


    )
}
