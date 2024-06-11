import { HoverEffect } from "@/components/ui/card-hover-effect"
import { getEntities, getErrorLog } from "@/lib/actions"

export default async function GreenhouseHome() {
	let greenhouses
	try {
		greenhouses = await getEntities()
	} catch (error) {
		greenhouses = { message: "Greenhouses are not available" }
		console.log(error)
	}

	return (
		<div className="max-w-7xl mx-auto px-8">
			{greenhouses && <HoverEffect items={greenhouses} />}
		</div>
	)
}
