import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Try() {
    let [showdata, setshowdata] = useState([])
    let [updatedata, setupdatedata] = useState({ update: null, name: "", city: "" })
    let fetch = () => {
        axios("http://localhost:8000/Student")
            .then(resdata => setshowdata(resdata.data))
            .catch(error => console.error(error))
    }
    useEffect(() => {
        fetch()
    }, [])
    let del = (id) => {
        axios.delete(`http://localhost:8000/Student/${id}`)
            .then(() => { fetch() })
    }
    let edit = (mappeddata) => {
        setupdatedata({ update: mappeddata.id, name: mappeddata.name, city: mappeddata.city })
    }
    let submit = (id) => {
        axios.put(`http://localhost:8000/Student/${id}`,
            {
                name: updatedata.name, city: updatedata.city
            })
            .then(() => {
                setupdatedata({ update: null, name: "", city: "" })
                fetch()
            })
    }
    return (
        <>{
            showdata.map((mappeddata, id) => {
                return (
                    <div key={id}>
                        <div>
                            {/* <input type="text" name="" id="" value={mappeddata.id} /> */}
                            <input type="text" name="" id="" value={updatedata.name} onChange={(e) => setupdatedata({ ...updatedata, name: e.target.value })} />
                            <input type="text" name="" id="" value={updatedata.city} onChange={(e) => setupdatedata({ ...updatedata, city: e.target.value })} />
                            <button onClick={() => { submit(mappeddata.id) }}>submit</button>
                        </div>
                        <p>{mappeddata.id}</p>
                        <p>{mappeddata.name}</p>
                        <p>{mappeddata.city}</p>
                        <button onClick={() => { del(mappeddata.id) }}>Delete</button>
                        <button onClick={() => { edit(mappeddata) }}>Edit</button>
                    </div>
                )
            })
        }
        </>
    )
}
