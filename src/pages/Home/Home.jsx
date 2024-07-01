import React, { useEffect } from "react";
import useAppFunction from "../../hooks/useAppFunction";
import Component1 from "./components/component1";
import useTestQuery from "./useQuery";

const Home = () => {
  const { handleAlert } = useAppFunction();
  const { data } = useTestQuery();
  console.log(`🚀 ~ file: Home.jsx:9 ~ data:`, data);
  useEffect(() => {
    handleAlert(true, "success", "hel ");
  }, []);

  return (
    <div style={{ height: "1222vh" }}>
      <Component1 />
    </div>
  );
};

export default Home;
