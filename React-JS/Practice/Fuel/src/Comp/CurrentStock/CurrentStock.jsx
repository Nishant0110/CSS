import { useSelector } from "react-redux";

export default function CurrentStock() {
    const Petrol = useSelector(state => state.Petrol.Petrol);
    const Disel = useSelector(state => state.Diesel.Diesel);
    const CNG = useSelector(state => state.Cng.Cng);

    return (
        <div className="col-md-4">
            <h1>Current Stock</h1>
            <ul className="list-group ">
                <li className="list-group-item">Petrol : {Petrol}</li>
                <li className="list-group-item">Disel :{Disel}</li>
                <li className="list-group-item">CNG :{CNG} </li>
            </ul>

        </div>
    )
}