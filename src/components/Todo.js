import React, { useState } from 'react';
import { ButtonGroup, Button, Box, TextField, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../Todo.css';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #4252E8',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);

    const updateTodo = (e) => {
        // Update todo with new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })

        setOpen(false);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <TextField
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        label="Change your item"
                        placeholder="Placeholder"
                        margin="normal"
                        fullWidth
                    />
                    <Button onClick={updateTodo} variant="contained" color="primary">Update</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        bgcolor: '#EBECF2',
                        borderRadius: 10,
                    }}>
                    <ListItem>
                        <ListItemText primary={props.todo.todo} />
                    </ListItem>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button size="medium" color="primary" startIcon={<EditIcon />} onClick={e => setOpen(true)}></Button>
                        <Button size="medium" color="secondary" startIcon={<DeleteIcon />} onClick={e => db.collection('todos').doc(props.todo.id).delete()}></Button>
                    </ButtonGroup>
                </Box>

            </List>
        </>
    )
}

export default Todo