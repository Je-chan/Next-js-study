import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("새로고침하면 서버쪽에서 ISR 이 찍힌다");

  return {
    props: { time: new Date().toISOString() },
    // revalidate 는 초단위
    revalidate: 1,
  };
}

export default function Isr({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}

Isr.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
