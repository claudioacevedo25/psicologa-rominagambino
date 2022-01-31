import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { home } from '../../constants/paragraphs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFCD',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({open, handleClose}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Bienvenidos
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {`${home}`}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
