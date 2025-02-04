'use server'

import { Link } from "@/app/example"
import { revalidatePath } from "next/cache";

const AWS_GATEWAY = 'https://zutgvxqd4j.execute-api.ap-southeast-2.amazonaws.com/deleteLink'


export async function deleteLink(id: string) {

	return fetch(AWS_GATEWAY, {
		method: "DELETE",
		body: JSON.stringify({
			id,
		}),
	})
		.then((res) => res.json())
		.then((data: Link) => {

			revalidatePath("/"); // Revalidate homepage


			return data
		})
		.catch((err) => {
			console.log(err)
		})
		

}