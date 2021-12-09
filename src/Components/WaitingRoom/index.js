import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api-v1-staging-eks.fingo.africa/auth/fe_test";

function Index({ position }) {
  const [code, setCode] = useState();
  const [claimed, setClaimed] = useState(0);

  useEffect(() => {
    const getClaimedRefferals = async () => {
      try {
        const claimed = await axios.get(`${URL}/claimed_referrals`);
        setClaimed(claimed.data.data.length);
      } catch (err) {
        alert("Something went wrong");
      }
    };

    getClaimedRefferals();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/redeem_referral`, { referral: code });
    } catch (error) {
      alert("Invalid code");
    }
  };

  return (
    <form className="waitingroom">
      <div className="waitingroom__position">
        <p>Your position is: {claimed + 1}</p>
        <p>{position}</p>
      </div>
      <div className="waitingroom__code">
        <label htmlFor="">Enter Code:</label>
        <input type="text" name="" onChange={(e) => setCode(e.target.value)} />
      </div>
      <button
        className="waitingroom__button"
        type="submit"
        onClick={submitHandler}
      >
        submit
      </button>
    </form>
  );
}

export default Index;
