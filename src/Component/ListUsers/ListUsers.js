import CardUser from "../CardUser/CardUser";
import "../CardUser/carduser.css";

const ListUsers = ({ users }) => {
  console.log(users);
  return (
    <div className="carduser">
      {users.map((user) => (
        <CardUser user={user} key={user.id} />
      ))}
    </div>
  );
};

export default ListUsers;
