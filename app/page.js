import { checkApiStatus, getConfig } from "@/lib/actions"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default async function Home() {
	let apiStatus
	try {
		apiStatus = await checkApiStatus()
	} catch (error) {
		apiStatus = { message: "API is not running" }
		console.log(error)
	}

	return (
		<div className="flex flex-col min-h-screen gap-10 items-center">
			<h1 className="text-2xl font-bold mt-2">
				Welcome to Greenhouse Management System
			</h1>

			<Card className="text-center w-60">
				<CardHeader>
					<CardTitle>
						<h3>API Status</h3>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4 justify-center items-center">
						<p>{apiStatus.message}</p>
						{apiStatus.message === "API running." ? (
							<span className="flex h-3 w-3 rounded-full bg-green-500" />
						) : (
							<span className="flex h-3 w-3 rounded-full bg-red-500" />
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
