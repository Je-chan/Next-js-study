import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import {useState} from "react";
import {useRouter} from "next/router";


export async function getServerSideProps() {

	// Shallow Routing 이 아닌 이상 서버 콘솔에 "server" 가 찍힌다
	console.log('server')

	return {
		props: {
		}
	}
}

export default function MyInfo() {
	const router = useRouter()
	// Local State
	const [clicked, setClicked] = useState(false)
	const {status = 'initial'} = router.query


	return (
		<>
			<h1 className="title">My Info</h1>
			<h1 className="title">Local State_Clicked {String(clicked)}</h1>
			<h1 className="title">Query_Status {status}</h1>
			<button onClick={() =>
			{
				alert('edit')
				setClicked(true)
				location.replace('/setting/my/info?status=editing')
			}}>
				edit(location.replace)
			</button>
			<button onClick={() =>
			{
				alert('edit')
				setClicked(true)
				router.push('/setting/my/info?status=editing')
			}}>
				edit(router.push)
			</button>
			<button onClick={() =>
			{
				alert('edit')
				setClicked(true)
				router.push('/setting/my/info?status=editing', undefined, {shallow: true})
			}}>
				edit(router.push(url, undefined, shallow))
			</button>
		</>
	)
}

MyInfo.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>
				{page}
			</SubLayout>
		</Layout>
	)
}