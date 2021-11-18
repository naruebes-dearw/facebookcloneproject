import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useStateValue } from '../../../contextAPI/UserProvider';
import { postMessage } from '../../../serverConnection/serverConnection';
import "./Dialog.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [userInfo, dispatch] = useStateValue();
  const { _id, profileImgUrl, firstName, lastName } = userInfo.data;
  const fullName = `${firstName} ${lastName}`;
  const [postText, setPostText] = React.useState("");
  const [postImg, setPostImg] = React.useState("");

  const createPost = async (e) => {
    // e.preventDefault();

    const posterInfo = {
      ownerId: _id,
      ownerName: fullName,
      ownerProfileImgUrl: profileImgUrl,
      postTime: new Date().toString(),
      postText: postText,
      postImg: postImg,
    }
    // postMessage(posterInfo, setPosts);

    setPostText("");
    setPostImg("");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="create-post-top">
          <h2>Create post</h2>
          <div className="close-btn">
            <CloseIcon style={{ fontSize: "25" }} />
          </div>
        </div>

        <div className="create-post-bottom">
          <div className="poster-info">
            poster info
          </div>

          <textarea
            autoFocus
            placeholder={`What's on your mind, ${firstName}?`}
            value={postText}
            onChange={e => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight + 3}px`;
              setPostText(e.target.value)
            }}
          />

          <div className="img-wrapper">
            {postImg && <img src={postImg} />}
          </div>

          <input
            className="image-url"
            placeholder="Enter Image URL"
            value={postImg}
            onChange={(e) => setPostImg(e.target.value)}
          />

          <button onClick={createPost}>Post</button>
        </div>
      </BootstrapDialog>
    </div>
  );
}
