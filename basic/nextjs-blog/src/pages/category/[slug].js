import Layout from 'components/Layout'
import SubLayout from "components/SubLayout";
import {useRouter} from 'next/router';

export default function CategorySlug() {
	const router = useRouter();
	// router.query 안에는 slug 에 해당하는 Path 값과 Query 의 파라미터 값이 들어온다.
	// http://localhost:3000/category/food?country=korea 일 경우 country 라는 정적인 파라미터를 router.query 로 받을 수 있다.
	const {slug, country} = router.query


	return (
		<>
			<h1 className="title">Category {slug} from {country}</h1>
		</>
	)
}

CategorySlug.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>
				{page}
			</SubLayout>
		</Layout>
	)
}