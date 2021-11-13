import "./BodyLeft.css";
import SideMenu from "./sideMenu/SideMenu";
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useStateValue } from "../../../../contextAPI/UserProvider";

const BodyLeft = () => {
  const [userInfo, dispatch] = useStateValue();
  const { firstName, lastName } = userInfo.data;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="body-left">
      <SideMenu imgUrl={userInfo.data.profileImgUrl} menuTitle={fullName} />
      <SideMenu Icon={PeopleIcon} menuTitle="Friends" />
      <SideMenu Icon={GroupsIcon} menuTitle="Groups" />
      <SideMenu Icon={StorefrontIcon} menuTitle="Marketplace" />
      <SideMenu Icon={OndemandVideoIcon} menuTitle="Watch" />
      <SideMenu Icon={AccessTimeIcon} menuTitle="Memories" />
      <SideMenu Icon={KeyboardArrowDownIcon} menuTitle="See more" />

    </div>
  )
}

export default BodyLeft
