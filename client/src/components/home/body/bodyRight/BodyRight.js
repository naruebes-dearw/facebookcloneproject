import "./BodyRight.css";
import Person from "./person/Person";
import { usersList } from "../../../../serverConnection/serverConnection";
import { useEffect, useState } from "react";

const BodyRight = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersList(setUsers);
  }, [])

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
