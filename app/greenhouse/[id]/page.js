// PlastenikPage.js
"use client"
import { useParams } from "next/navigation"
import mockData from "@/public/mock-data/greenhouseData"

export default function GreenhousePage() {
	const params = useParams()
	const { id } = params
	const data = mockData.find((plastenik) => plastenik.id === parseInt(id))

	if (!data) {
		return <div>Plastenik nije pronađen</div>
	}

	const formatDate = (dateString) => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		}
		return new Date(dateString).toLocaleString("hr-HR", options)
	}

	return (
		<div className="max-w-7xl mx-auto px-8 flex flex-col justify-center">
			<h1 className="text-center text-4xl font-bold">Plastenik {id}</h1>
			<div className="text-left mt-12">
				<p>
					<strong>Vrijeme zadnjeg zalijevanja:</strong>{" "}
					{formatDate(data.lastWatered)}
				</p>
				<p>
					<strong>Vrijeme zadnjeg zagrijavanja:</strong>{" "}
					{formatDate(data.lastHeated)}
				</p>
				<p>
					<strong>Trenutna temperatura:</strong>{" "}
					{data.currentTemperature}°C
				</p>
				<p>
					<strong>Trenutna vlaga:</strong> {data.currentHumidity}%
				</p>
				<p>
					<strong>Prosječna temperatura (zadnjih 24 sata):</strong>{" "}
					{data.averageTemperature24h}°C
				</p>
				<p>
					<strong>Prosječna vlaga (zadnjih 24 sata):</strong>{" "}
					{data.averageHumidity24h}%
				</p>
			</div>
		</div>
	)
}
