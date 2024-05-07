import React from 'react'
import CustomerActions from '../CustomerActions/CustomerActions'
import ManagerActions from '../ManagerActions/ManagerActions'
import CurrentStock from '../CurrentStock/CurrentStock'

export default function App() {
    return (
        <div className="container mt-2">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome To Our Fuel Station</h1>
                    <div className="row">
                        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque, aut iste neque ullam earum aliquid doloremque expedita distinctio harum deserunt provident eius nihil quo at perspiciatis quasi. Aspernatur dolorum soluta nostrum saepe quo deleniti ab, eum, aut velit, aliquam hic iure. Ea vitae qui, aspernatur doloremque ullam inventore minima.</p>
                    </div>
                    <button className="btn btn-primary btn-lg" type="button">Open Customer's Actions</button>
                    <button className="btn btn-primary btn-lg ms-4" type="button">Open Admin's Actions</button>
                </div>
            </div>
            <CustomerActions/>
            <ManagerActions/>
            <CurrentStock/>
        </div>
    )
}
