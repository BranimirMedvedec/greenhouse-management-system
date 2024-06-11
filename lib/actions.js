"use server"

export async function checkApiStatus() {
	try {
		const response = await fetch("http://localhost:8123/api/")
		const data = await response.json()
		console.log("API status:", data)
		return data
	} catch (error) {
		console.error("Error fetching API status:", error)
		return { message: "API is not running" }
	}
}
