import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cancelIcon from '../Assets/close.svg'

const UsersModal = ({ usersModalClick, userModalData, allUsers, navigateToProfile, type }) => {

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
            <img src={cancelIcon} alt='cancel edit' className='cancelEditBtn' onClick={usersModalClick} />
            <div className='allUsers'>
                <h2 style={{ margin: '5px' }}>{type}</h2>
                {userModalList.map((user) => {
                    return (
                        <div key={user.uid} className='users-profile'>
                            <hr />
                            <Link className='username' to={`/profile/${user.uid}`} id={user.uid} onClick={onLinkClick}> {user.displayName} </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default UsersModal