 import React, { useState, useRef } from 'react'
 import { Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

const CommentSection = ({ group }) => {
    const [comments, setComments] = useState([['Comment 1','Author 1', [['Comment to comment 1', 'Author to comment']]], ['Comment 2', 'Author 2', [['Comment to comment 2', 'Author to comment']]], ['Comment 3', 'Author 3', [['Comment to comment 3', 'Author to comment']]], ['Comment 4', 'Author 4', [['Comment to comment 4', 'Author to comment']]]])
    const [comment, setComment] = useState(['', 'Author'])
    const [subcomment, setSubcomment] = useState(['', 'Sub-Author'])

    const handleClick = () => {

    }

    return (
        <div>
            <div>
                {comments.map((c,i) => (
                    <Paper>
                        <Typography key={i} gutterBottom variant="subtitle1" textAlign="left" marginLeft="20px" marginTop="30px">
                            {c[0]}
                        </Typography>
                        <Typography variant="subtitle2" textAlign="right" marginRight="10px">{c[1]}</Typography>
                        <Divider sx={{ margin: '20px 0' }}></Divider>
                        {c[2].map((cc, ii) => (
                            <>
                                <Typography sx={{ width: '95%', marginLeft: '5%', textAlign:'left' }} key={ii} gutterBottom variant="subtitle1">
                                {cc[0]}
                                </Typography>
                                <Typography variant="subtitle2" textAlign="right" marginRight="10px">{cc[1]}</Typography>
                                <TextField fullWidth rows={4} variant="outlined" label="Comment" value={subcomment[0]} onChange={(e) => setSubcomment([e.target.value, 'Sub-Author'])} />
                                <Button fullWidth disabled={!comment} variant="contained" onClick={handleClick} sx={{ marginTop: '20px', backgroundColor: '#991408', opacity: '0.9', color: '#FAD0A2' }}>Comment</Button>

                            </>
                        ))}
                    </Paper>
                ))}
                <Divider sx={{ margin: '20px 0' }}><Typography variant="subtitle2">Write a comment</Typography></Divider>
                <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment[0]} onChange={(e) => setComment([e.target.value, 'Author'])} />
                <Button fullWidth disabled={!comment} variant="contained" onClick={handleClick} sx={{ marginTop: '20px', backgroundColor: '#991408', color: '#FAD0A2' }}>Comment</Button>
            </div>
        </div>
    )
}

export default CommentSection