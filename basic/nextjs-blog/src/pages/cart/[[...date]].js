import Layout from 'components/Layout'
import SubLayout from "components/SubLayout";
import {useRouter} from "next/router";
import Link from "next/link";

export default function CartDateSlug() {
	const router = useRouter();
	const {date} = router.query
	// PATH : cart/2022/06/25
	// h1 text content : Cart Date Slug ["2022","06","25"]

	return (
		<>
			<h1 className="title">Cart Date Slug {JSON.stringify(date)}</h1>
			<Link href="/cart/2022/06/05"><a>2022년 6월 5일로</a></Link>
			<br />
			<button onClick={() => router.push('/cart/2022/06/24')}>2022년 6월 24일로</button>
		</>
	)
}

CartDateSlug.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>
				{page}
			</SubLayout>
		</Layout>
	)
}