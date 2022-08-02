import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateForm = props => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [theNameError, setTheNameError] = useState("");
    const [form, setForm] = useState({
        name: "",
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + _id)
            .then(res => setForm(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])

    const onChangeHandler = e => {
        if(e.target.value.length < 3) {
            setTheNameError("Author's name must be at least 3 characters");
            setErrors("");
        } else if(e.target.value.length >= 3) {
            setTheNameError("");
        }
            
        setForm({...form, [e.target.name]: e.target.value})
        
    }

    const formHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/" + _id, form)
            .then(res => {
                if(res.data.error) {
                    console.log("Something went wrong updating author name")
                    setErrors(res.data.error.errors)
                } else {
                    console.log("Update was successful")
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <Link to={`/`}>Home</Link>
            <h2>Edit This Author</h2>
            <form onSubmit={formHandler}>
                <label htmlFor="name" style={{marginTop: 20}}><strong>Name:</strong></label>
                <input type="text" name="name" class="form-control" value={form.name} onChange={onChangeHandler}/>
                <input type="submit" value="Submit" className="btn btn-info" style={{marginTop: 20}} />
            </form>
            { errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span> : "" }
            <br></br>
            { !errors.name ? <p style={{color: 'red'}}>{ theNameError }</p> : ""}
            <br></br>
            <Link to={"/"}><button className="btn btn-info" style={{marginTop: 20}}>Cancel</button></Link>
        </div>
    );
}

export default UpdateForm;