export default function handler(req, res) {
	// api 폴더 내부에서는 req 안에 쿼리가 담겨 있다. (router.query 랑은 다름)
	const {uid} = req.query
	const cookies = req.cookies
	res.status(200).json({name: `liebe(dynamic) ${uid} ${JSON.stringify(cookies)}`})
}