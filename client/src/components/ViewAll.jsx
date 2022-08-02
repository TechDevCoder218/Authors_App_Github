import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ViewAll = props => {
    const [author, setAuthor] = useState(null);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [update])

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/authors/delete/" + id)
            .then(() => setUpdate(!update))
            .catch(err => console.log("Issue Deleting Record", err))
    }

    return(
        <div className="container">
            <h2>We have quotes by:</h2>
            <Table striped bordered>
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
                <tbody>
                {
                    author ? author.map((authorName, i) => {
                        return <tr key={i}>
                            <td>{authorName.name}</td>
                            <td><Link to={`/update/${authorName._id}`}><button style={{marginRight: 20}}>Edit</button></Link><button onClick={() => handleDelete(authorName._id)}>Delete</button></td>
                        </tr>
                    }) : ""
                } 
                </tbody>
            </Table>
            <Link to={`/create`}>Add an Author</Link>
        </div>
    );
}

export default ViewAll;