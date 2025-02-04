import { Link } from "@/app/example"

const AWS_GATEWAY = 'https://zutgvxqd4j.execute-api.ap-southeast-2.amazonaws.com/links'


export function getLinks() {

	return fetch(AWS_GATEWAY)
		.then((res) => res.json())
		.then((data: Link[]) => {
			return data
		})
		.catch((err) => {
			console.log(err)
		})
		

}