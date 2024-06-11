import { checkApiStatus } from "@/lib/actions"

export default function Home() {
	// const message = checkApiStatus()
	const message = { message: "API is not running" }

	return (
		<div className="flex flex-col items-center min-h-screen py-2">
			<h1 className="text-2xl font-bold">
				Welcome to Greenhouse Management System
			</h1>

			<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
				<div className="p-6 mt-6 text-left border w-96 rounded-xl">
					<h3 className="text-2xl font-bold">API Status</h3>
					<p className="mt-4 text-xl">{message.message}</p>
				</div>
			</div>
		</div>
	)
}
