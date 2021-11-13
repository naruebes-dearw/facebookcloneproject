import "./HeaderLeft.css";
import { ReactComponent as Logo } from "./facebook-logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";


const HeaderLeft = () => {
  return (
    <div className="header-left">
      <Logo style={{ cursor: "pointer" }} />

      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search Facebook"
        />
        <label htmlFor="search-input" className="search-label">
          <SearchIcon />
        </label>
      </div>
    </div>
  )
}

export default HeaderLeft
