import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth/index";

const Dashboard = () => {
  const { Logout } = useContext(AuthContext);
  return (
    <>
      <div>
        <p>Dashboard</p>
        <button onClick={() => Logout()}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
