import "./Person.css";
import PersonIcon from '@mui/icons-material/Person';

const Person = ({ profileImgUrl, fullName }) => {
  return (
    <div className="person">
      <div className="img-container">
        {
          profileImgUrl && <img src={profileImgUrl} /> ||
          <PersonIcon fontSize="small" />
        }
      </div>
      <p>{fullName}</p>
    </div>
  )
}

export default Person
