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
        <div className='users-modal'>
            <button className="close-modal-btn" onClick={usersModalClick}>Close</button>
            <div className='allUsers'>
                {userModalList.map((user) => {
                    return (
                        <div key={user.uid} className='users-profile'>
                            <Link className='username' to={`/profile/${user.uid}`} id={user.uid} onClick={onLinkClick}> {user.displayName} </Link>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default UsersModal