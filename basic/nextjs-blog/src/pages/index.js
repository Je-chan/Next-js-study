import Link from "next/link";

export async function getServerSideProps() {
  console.log("Client 콘솔에서 찍히지 않고 Server 에서 찍힌다");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <h1>
        <Link href="/csr">
          <a>CSR</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>SSG</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR</a>
        </Link>
      </h1>
    </>
  );
}
