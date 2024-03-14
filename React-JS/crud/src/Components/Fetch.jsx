import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Fetch() {
    let [showdata, setshowdata] = useState([])
    let [updatedata, setupdatedata] = useState({
        update: null,
        name: '',
        city: ''
    })
    let fetchdata = () => {
        axios("http://localhost:8000/Student")
            .then(responsedata => setshowdata(responsedata.data))
            .catch(error => console.error(error))
    }
    if (showdata.length == 0) {
        fetchdata();
    }
    let del = (id) => {
        axios.delete(`http://localhost:8000/Student/${id}`)
            .then(() => {
                fetchdata();
            })
    }
    let edit = (mappeddata) => {
        setupdatedata({ update: mappeddata.id, name: mappeddata.name, city: mappeddata.city })
    }
    let submit = (id) => {
        axios.put(`http://localhost:8000/Student/${id}`, {
            name: updatedata.name,
            city: updatedata.city
        })
            .then(() => {
                setupdatedata({
                    update: null,
                    name: '',
                    city: ''
                })
                fetchdata();
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            {showdata.map((mappeddata, index) => {
                return (
                    <div key={index}>
                        {updatedata.update === mappeddata.id ? (<div>
                            <input type="text" name="" id="" value={updatedata.name} onChange={(e) => { setupdatedata({ ...updatedata, name: e.target.value }) }} />
                            <input type="text" name="" id="" value={updatedata.city} onChange={(e) => { setupdatedata({ ...updatedata, city: e.target.value }) }} />
                            <button type="button" onClick={() => { submit(mappeddata.id) }}>submit</button>
                        </div>) :
                            <div>
                                <p>{mappeddata.id}</p>
                                <p>{mappeddata.name}</p>
                                <p>{mappeddata.city}</p>
                                <button onClick={() => { del(mappeddata.id) }}>delete</button>
                                <button onClick={() => { edit(mappeddata) }}>edit</button>
                            </div>
                            }
                    </div>
                )
            })}
        </div>

    )
}