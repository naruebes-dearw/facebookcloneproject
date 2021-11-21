import "./BodyRight.css";
import Person from "./person/Person";
import { usersList } from "../../../../serverConnection/serverConnection";
import { useEffect, useState } from "react";
import { useStateValue } from "../../../../contextAPI/UserProvider";

const BodyRight = () => {
  const [userInfo, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersList(setUsers);
  }, [userInfo])

  return (
    <div className="body-right">
      <h3>People</h3>

      {
        users
          .map(user => {
            const { firstName, lastName } = user;
            const fullName = `${firstName} ${lastName}`;
            return (
              <Person
                key={user._id}
                profileImgUrl={user.profileImgUrl}
                fullName={fullName}
              />
            )
          })
      }
    </div>
  )
}

export default BodyRight
