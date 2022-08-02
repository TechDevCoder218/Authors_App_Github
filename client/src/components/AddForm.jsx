import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
    });

    const [errors, setErrors] = useState({});

    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res => {
                if(res.data.error) {
                    console.log("Something went wrong creating an author")
                    setErrors(res.data.error.errors)
                } else {
                    console.log("Author created successfully")
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <Link to={`/`}>Home</Link>
            <h2>Add a new Author</h2>
            <form onSubmit={formHandler}>
                <label htmlFor="name" style={{marginTop: 20}}><strong>Name:</strong></label>
                <input type="text" name="name" class="form-control" value={form.name} onChange={onChangeHandler}/>
                <input type="submit" value="Submit" className="btn btn-info" style={{marginTop: 20}} />
            </form>
            { errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span> : "" }
            <br></br>
            <Link to={"/"}><button className="btn btn-info" style={{marginTop: 20}}>Cancel</button></Link>
        </div>
    );
}

export default AddForm;