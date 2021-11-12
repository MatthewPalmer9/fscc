import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Employee(props) {
    const {id, userId, firstName, lastName} = props.employee;
    const history = useHistory();

    const redirectToEdit = e => {
        history.push(`/employee/${e.target.value}/edit`);
    };

    const redirectToView = e => {
        history.push(`/employee/${e.target.value}/view`);
    };

    return (
        <>
            <tr key={id}>
                <td>{userId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <button value={id} onClick={redirectToView} id="view__btn">View</button>
                    <button value={id} onClick={redirectToEdit} id="edit__btn">Edit</button>
                </td>
            </tr>
        </>
    )
}
