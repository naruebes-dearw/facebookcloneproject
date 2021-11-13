import "./SideMenu.css";
import PersonIcon from '@mui/icons-material/Person';

const SideMenu = ({ imgUrl, Icon, menuTitle }) => {
  return (
    <div className="side-menu">
      <div className="icon-container">
        {
          (imgUrl && <img src={imgUrl} />) ||
          (Icon && <Icon />) ||
          <PersonIcon />
        }
      </div>
      <p>{menuTitle}</p>
    </div>
  )
}

export default SideMenu
