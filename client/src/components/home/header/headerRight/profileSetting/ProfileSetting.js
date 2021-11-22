import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import "./ProfileSetting.css";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useStateValue } from '../../../../../contextAPI/UserProvider';
import { deleteProfile, editProfile, getUser } from '../../../../../serverConnection/serverConnection';
import CustomizedDialogs from '../../../../CustomizedDialogs/CustomizedDialogs';
import EditPostPopup from '../../../body/bodyCenter/feed/posts/post/editPostPopup/EditPostPopup';
import { TextField } from '@mui/material';

export default function ProfileSetting({ children }) {
  const [editImgUrl, setEditImgUrl] = React.useState("")
  const [editFirstName, setEditFirstName] = React.useState("");
  const [editLastName, setEditLastName] = React.useState("");
  const [openDeleteProfile, setOpenDeleteProfile] = React.useState(false)
  const [openEditProfile, setOpenEditProfile] = React.useState(false)
  const [userInfo, dispatch] = useStateValue();
  const {
    _id: userId,
    firstName,
    lastName,
    profileImgUrl
  } = userInfo.data;

  React.useEffect(() => {
    setEditImgUrl(profileImgUrl || "");
    setEditFirstName(firstName);
    setEditLastName(lastName);
  }, [openEditProfile])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    const newProfile = {
      userId,
      editFirstName,
      editLastName,
      editImgUrl
    }
    editProfile(newProfile, dispatch);
  };
  // const editProfilePopup = () => {
  //   console.log("edit profile popup 1")
  //   setOpenEditProfile(true)
  //   // setAnchorEl(null);
  // }

  // const stopImmediatePropagation = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   console.log("stop immediate propagation.");
  // };

  const handleDelete = () => {
    deleteProfile(userId);
    setAnchorEl(null);
  };
  const handleCloseDelete = () => {
    setOpenDeleteProfile(false);
    setAnchorEl(null);
  };
  const useDeleteProfile = () => {
    return [openDeleteProfile, setOpenDeleteProfile];
  };
  const useEditProfile = () => {
    return [openEditProfile, setOpenEditProfile];
  };

  return (
    <div className="profile-setting">
      <div
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </div>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setOpenEditProfile(true);
          }}
        >
          <EditOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          <p>Edit Profile</p>
        </MenuItem>

        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setOpenDeleteProfile(true);
          }}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          <p>Delete Profile</p>
        </MenuItem>
      </Menu>

      <CustomizedDialogs title="Edit Profile" useValue={useEditProfile}>
        <form onSubmit={handleEdit} className="edit-profile">
          <div className="img-wrapper">
            {
              editImgUrl && <img src={editImgUrl} /> ||
              <PersonIcon fontSize="large" />
            }
          </div>
          <TextField
            className="text-field"
            onChange={e => setEditImgUrl(e.target.value)}
            value={editImgUrl}
            label="Profile Image URL"
            variant="standard"
          />
          <TextField
            className="text-field"
            onChange={e => setEditFirstName(e.target.value)}
            value={editFirstName}
            label="First Name"
            variant="standard"
            required
          />
          <TextField
            className="text-field"
            onChange={e => setEditLastName(e.target.value)}
            value={editLastName}
            label="Last Name"
            variant="standard"
            required
          />
          <input type="submit" value="Save" className="save-btn" />
        </form>
      </CustomizedDialogs>

      <CustomizedDialogs title="Delete Profile" useValue={useDeleteProfile}>
        <div className="delete-profile">
          <p>Are you sure to delete you profile?</p>
          <div className="btns">
            <button onClick={handleCloseDelete} className="cancle-btn btn">Cancle</button>
            <button onClick={handleDelete} className="confirm-btn btn">Delete</button>
          </div>
        </div>
      </CustomizedDialogs>
    </div>
  );
}