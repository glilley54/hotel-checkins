import {useState} from "react";
import {postBooking} from "../containers/BookingContainer"

const BookingForm = ({addBooking, postBooking}) => {

    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
        console.log(formData)
    }
    
    return (
        <div>
        <form className="form" onSubmit={handleSubmit} method="post">
            <div className="input">
                <label htmlFor="name">Name: </label>
                <input  onChange = {onChange} type="text" id="name" required/>
                <br></br>
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input onChange={onChange} type="text" id="email"  required/>
                <br></br>
            </div>
            <div className="input">
                <label htmlFor="status">Checked In: </label> 
                <input onChange={onChange} type="text" id="status"/>
                <br></br>
            </div>
            <div className="input">
                <input className="btn btn-outline-dark" type="submit" value="Save" />
            </div>
            <hr></hr>
        </form>
        </div>

    )

}
export default BookingForm;