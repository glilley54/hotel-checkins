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
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Name:</label>
            <input  onChange = {onChange} type="text" id="name" required/>

            <label htmlFor="email">Email:</label>
            <input onChange={onChange} type="text" id="email"  required/>

            <label htmlFor="status">Status: </label> 
            <input onChange={onChange} type="checkbox" value="false" id="status"/>

            <input type="submit" value="Save" />
        </form>

    )

}
export default BookingForm;