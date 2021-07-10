import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersModal = ({ usersModalClick, userModalData, allUsers, navigateToProfile }) => {

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

    const onLinkClick = (e) => {
        usersModalClick()
        navigateToProfile(e)
    }

    return (
        <div>
            <button onClick={usersModalClick}>Close</button>
            {userModalList.map((user) => {
                return (
                    <div key={user.uid}>
                        <Link to={`/profile/${user.uid}`} id={user.uid} onClick={onLinkClick}> {user.displayName} </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default UsersModal