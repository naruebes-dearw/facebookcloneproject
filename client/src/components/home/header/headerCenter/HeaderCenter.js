import "./HeaderCenter.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import IconBtn from "./iconBtn/IconBtn";

const HeaderCenter = () => {
  return (
    <div className="header-center">
      <IconBtn Icon={HomeOutlinedIcon} active="active" />
      <IconBtn Icon={PeopleAltOutlinedIcon} />
      <IconBtn Icon={OndemandVideoOutlinedIcon} />
      <IconBtn Icon={StorefrontOutlinedIcon} />
      <IconBtn Icon={GroupsRoundedIcon} />
    </div>
  )
}

export default HeaderCenter
