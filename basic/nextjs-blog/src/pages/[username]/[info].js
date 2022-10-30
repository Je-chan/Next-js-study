import Layout from 'components/Layout'
import SubLayout from "components/SubLayout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function UsernameInfo() {

	const router = useRouter();
	const {username, info, uid } = router.query;

	const [name, setName] = useState('Who')

	// useEffect(() => {
	// 	fetch('/api/user')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setName(data.name)
	// 		})
	// }, [])

	useEffect(() => {
		// 맨 초기 렌더링시, uid 는 undefined 로 뜬다

		if(uid) {

		fetch(`/api/user-info/${uid}`)
			.then(res => res.json())
			.then(data => {
				setName(data.name)
			})
		}}, [uid])

	return (
		<>
			<h1 className="title">{username}'s {info}</h1>
			<h1 className="title">Server Name: {name}</h1>
		</>
	)
}

UsernameInfo.getLayout = function getLayout(page) {
	return (
		<Layout>
			<SubLayout>
				{page}
			</SubLayout>
		</Layout>
	)
}