import { Link } from "react-router-dom"
import '../Styles/WhoToFollow.css'

const WhoToFollow = ({ allUsers, currUser, following, navigateToProfile }) => {

    //Filter current users followers out of all available users, to create a list of recommended accounts to follow
    const usersNotFollowing = allUsers.filter(val => !following.includes(val.uid)).filter((user) => user.uid !== currUser.uid);

    return (
        <div id='whoToFollow-sidebar'>
            <div className='not-following-container'>
                <h2 className='whoToFollow-title'>Who To Follow</h2>
                {usersNotFollowing.map((user) => {
                    return (
                        <div key={user.uid} className="users-follow">
                            <Link to={`/profile/${user.uid}`} onClick={navigateToProfile} id={user.uid} className='username'>{user.displayName}</Link>
                        </div>
                    )
                })}
                {usersNotFollowing.length < 1 && <h3>Nothing to see here...</h3>}
            </div>
        </div>
    )
}

export default WhoToFollow