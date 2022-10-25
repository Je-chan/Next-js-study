import { useEffect, useState } from "react";
import SubLayout from "../components/SubLayout";
import Layout from "../components/Layout";

export default function Csr() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("Server 콘솔에서 찍히지 않고 Client 에서 찍힌다");
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}

Csr.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
