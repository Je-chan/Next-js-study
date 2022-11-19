import Head from "next/head"
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}


export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default  function Post() {
	return (
	<Layout>
		<Head>
			<h1>첫번째 글</h1>
		</Head>
		<h1>첫번째 글</h1>
	</Layout>
	)
}