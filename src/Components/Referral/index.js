import { useEffect, useState } from "react";
import axios from "axios";
import ReferralsReport from "./ReferralsReport";
// import ReferralCodes from "./ReferralCodes";
import ReferralUsers from "./ReferralUsers";

const URL = "https://api-v1-staging-eks.fingo.africa/auth/fe_test";

function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getClaimedRefferals = async () => {
      const claimed = await axios.get(`${URL}/claimed_referrals`);
      setUsers(claimed.data.data);
    };

    getClaimedRefferals();
  }, []);

  return (
    <div className="referrals">
      <ReferralsReport users={users} maxReferrals={5} />
      {/* <ReferralCodes /> */}
      <ReferralUsers users={users} />
    </div>
  );
}

export default Index;
