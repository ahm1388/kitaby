import React, { useState } from 'react'
import { Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { commentGroup } from '../actions/groups'

const CommentSection = ({ group }) => {
    const [comments, setComments] = useState(group?.comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()


    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`
        dispatch(commentGroup(finalComment, group._id))

        window.location.reload(false)
    } 

    return (
        <div>
            <div>
                {comments.map((c,i) => (
                    <Paper key={i}>
                        <Typography gutterBottom variant="subtitle1" textAlign="left" marginLeft="20px" marginTop="30px">
                            {c}
                        </Typography>
                    </Paper>
                ))}
                <Divider sx={{ margin: '20px 0' }}><Typography variant="subtitle2">Write a comment</Typography></Divider>
                {user?.result?.name && (
                <>
                    <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment([e.target.value])} />
                    <Button fullWidth disabled={!comment} variant="contained" onClick={handleClick} sx={{ marginTop: '20px', backgroundColor: '#991408', color: '#FAD0A2' }}>Comment</Button>
                </>
                )}
            </div>
        </div>
    )
}

export default CommentSection