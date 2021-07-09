const UsersModal = ({ usersModalClick, userModalData }) => {
    console.log(userModalData)
    return (
        <div>
            <button onClick={usersModalClick}>Close</button>
            im users modal
        </div>
    )
}
export default UsersModal