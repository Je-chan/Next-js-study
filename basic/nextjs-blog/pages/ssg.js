import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  // 빌드 전에 dev 에서 확인할 때는 서버에서 찍히는 것처럼 서버 콘솔에 내용이 찍히지만
  // 빌드를 하고 나면 클라이언트에도 서버에도 콘솔이 찍히지 않는다
  console.log("SSG");

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Ssg({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}

Ssg.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
