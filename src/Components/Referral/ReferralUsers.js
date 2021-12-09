import moment from "moment";

const ReferralUsers = ({ users }) => (
  <div className="referrals__users">
    <h3>Users</h3>

    <div className="referrals__header">
      <p>Name</p>
      <p>Claimed At</p>
    </div>

    {users?.map((user) => (
      <div key={user.name} className="referrals__data">
        <p>{user.name}</p>
        <p>{moment(user.claimedAt).format("MM/DD/YYYY")}</p>
      </div>
    ))}
  </div>
);

export default ReferralUsers;
