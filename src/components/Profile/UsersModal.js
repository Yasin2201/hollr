import { useEffect, useState } from "react";

const UsersModal = ({ usersModalClick, userModalData, allUsers }) => {

    const [userModalList, setUserModalList] = useState([])

    useEffect(() => {
        const userModalList = []
        allUsers.filter((user) => {
            return (userModalData.forEach(data => {
                return user.uid === data ? userModalList.push(user) : null
            }));
        })
        setUserModalList(userModalList)
    }, [userModalData, allUsers])

    return (
        <div>
            <button onClick={usersModalClick}>Close</button>
            {userModalList.map((user) => {
                return (
                    <div key={user.uid}>
                        {user.displayName}
                    </div>
                )
            })}
        </div>
    )
}
export default UsersModal