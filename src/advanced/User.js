import { useEffect, useState } from "react";

function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data);
        })();
    }, [])
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>{user.address.city}</h3>
                </div>
            ))}
        </div>
    )
}

export default User;