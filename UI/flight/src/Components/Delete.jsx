import { useEffect } from "react";
import { useState } from "react";

export default function Delete() {
    const [usersData, setUsersData] = useState([]);

    useEffect(()=> {
        async function getStudents() {
            const resp = await fetch('http://localhost:8080/gmail_1_0/test')
            const data = await resp.json();
            setUsersData(data);
        }
        getStudents();
    }, [])

    return(
        <>
            <table id="customers">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Password Created</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    usersData.map(user => {
                        return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.passwordCreated}</td>
                                <td>{user.phone}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    )
}