const Comment = () => {

    const submitComment = (e) => {
        e.preventDefault()
        console.log('working')
    }

    return (
        <form onSubmit={submitComment}>
            <input type='text' />
            <button type='submit'>Post Comment</button>

        </form>
    )
}

export default Comment