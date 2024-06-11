// PlastenikPage.js
"use client"
import { useParams } from "next/navigation"
import mockData from "@/public/mock-data/greenhouseData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function Greenhouse() {
	const [temperature, setTemperature] = useState("")
	const [humidity, setHumidity] = useState("")
	const [mode, setMode] = useState("automatic")
	const [heaterOn, setHeaterOn] = useState(false)
	const [sprinklerOn, setSprinklerOn] = useState(false)

	const handleTemperatureChange = (e) => {
		const value = e.target.value
		if (value === "" || (value >= 0 && value <= 50)) {
			setTemperature(value)
		}
	}

	const handleHumidityChange = (e) => {
		const value = e.target.value
		if (value === "" || (value >= 0 && value <= 100)) {
			setHumidity(value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission, e.g., send data to an API
		console.log({ temperature, humidity, mode })
	}

	const toggleHeater = () => {
		setHeaterOn((prev) => !prev)
	}

	const toggleSprinkler = () => {
		setSprinklerOn((prev) => !prev)
	}

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
		<div className="max-w-7xl mx-auto px-8 mt-12">
			<h1 className="text-center text-4xl font-bold">Plastenik {id}</h1>
			<div className="text-center flex justify-center mt-12">
				<Tabs
					defaultValue="current"
					className="w-[800px]">
					<TabsList className="flex justify-center">
						<TabsTrigger value="current">Current Data</TabsTrigger>
						<TabsTrigger value="historic">
							Historic Data
						</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="current">
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
								<strong>Trenutna vlaga:</strong>{" "}
								{data.currentHumidity}%
							</p>
							<p>
								<strong>
									Prosječna temperatura (zadnjih 24 sata):
								</strong>{" "}
								{data.averageTemperature24h}°C
							</p>
							<p>
								<strong>
									Prosječna vlaga (zadnjih 24 sata):
								</strong>{" "}
								{data.averageHumidity24h}%
							</p>
							{mode === "manual" && (
								<div className="flex space-x-4 mt-4">
									<Button
										className={`${
											heaterOn
												? "bg-red-500 hover:bg-red-700"
												: "bg-green-500 hover:bg-green-700"
										} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
										onClick={toggleHeater}>
										{heaterOn
											? "Turn off heater"
											: "Turn on heater"}
									</Button>
									<Button
										className={`${
											sprinklerOn
												? "bg-red-500 hover:bg-red-700"
												: "bg-blue-500 hover:bg-blue-700"
										} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
										onClick={toggleSprinkler}>
										{sprinklerOn
											? "Turn off sprinkles"
											: "Turn on sprinkles"}
									</Button>
								</div>
							)}
						</div>
					</TabsContent>
					<TabsContent value="historic">
						Change your password here.
					</TabsContent>
					<TabsContent value="settings">
						<div className="mb-4">
							<Label htmlFor="temperature">
								Temperature Threshold (°C)
							</Label>
							<Input
								type="number"
								id="temperature"
								value={temperature}
								onChange={(e) => handleTemperatureChange(e)}
								required
							/>
						</div>
						<div className="mb-4">
							<Label htmlFor="humidity">
								Humidity Threshold (%)
							</Label>
							<Input
								type="number"
								id="humidity"
								value={humidity}
								onChange={(e) => handleHumidityChange(e)}
								required
							/>
						</div>
						<div className="mb-6">
							<Label htmlFor="radio-group-1">Mode</Label>
							<div className="flex items-center">
								<RadioGroup
									value={mode}
									id="radio-group-1"
									onValueChange={(value) => setMode(value)}>
									<div className="flex items-center space-x-2">
										<RadioGroupItem
											value="automatic"
											id="automatic"
										/>
										<Label htmlFor="automatic">
											Automatic
										</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem
											value="manual"
											id="manual"
										/>
										<Label htmlFor="manual">Manual</Label>
									</div>
								</RadioGroup>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								onClick={handleSubmit}>
								Save Settings
							</button>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
