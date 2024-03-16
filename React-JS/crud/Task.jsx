import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Task() {
    let [showdata, setshowdata] = useState([])
    // let [mappeddata, setmaeddata] = useState([])
    let [updatedata, setupdatedata] = useState({ update: null, name: "", city: "" })
    let fetch = () => {
        axios("http://localhost:8000/Student")
            .then(respdata => setshowdata(respdata.data))
            .catch(a => console.error(a))
    }
    useEffect(() => {
        fetch();
    }, [])
    let del = (id) => {
        axios.delete(`http://localhost:8000/Student/${id}`)
        then(() => { fetch() })
    }
    let edit = (mappeddata) => {
        setupdatedata({ update: mappeddata.id, name: mappeddata.name, city: mappeddata.city })
    }

    let submit = (id) => {
        axios.put(`http://localhost:8000/Student/${id}`,
            { name: updatedata.name, city: updatedata.city })
            .then(() => {
                setupdatedata({ update: null, name: "", city: "" })
                fetch()
            }
            )
    }
    return (
        <div>
            {showdata.map((mappeddata, id) => {
                return (
                    <div key={id}>
                        {
                            updatedata.update === mappeddata.id ? <div>
                                <input type="text" value={updatedata.name} onChange={(e) => setupdatedata({ ...updatedata, name: e.target.value })} />
                                <input type="text" value={updatedata.city} onChange={(e) => setupdatedata({ ...updatedata, city: e.target.value })} />
                                <button type="button" onClick={() => { submit(mappeddata.id) }}>Submit</button>
                            </div> : (<div><p>{mappeddata.id}</p>
                                <p>{mappeddata.name}</p>
                                <p>{mappeddata.city}</p>
                                <button onClick={() => { del(mappeddata.id) }}>delete</button>
                                <button onClick={() => { edit(mappeddata) }}>edit</button></div>)
                        }


                    </div>
                )
            })}
        </div>
    )
}
