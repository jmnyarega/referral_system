const ReferralsReport = ({ users, maxReferrals }) => (
  <div className="referrals__info">
    <div className="referrals__claimed">
      <p>Claimed referrals</p>
      <p>{users.length}</p>
    </div>
    <div className="referrals__available">
      <p>Available referrals</p>
      <p>{maxReferrals - users.length}</p>
    </div>
  </div>
);

export default ReferralsReport;
