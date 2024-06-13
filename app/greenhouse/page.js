import { HoverEffect } from "@/components/ui/card-hover-effect"

export default async function GreenhouseHome() {
	let greenhouses = [
		{
			entity_id: "1",
			friendly_name: "Staklenik 1",
		},
		{
			entity_id: "2",
			friendly_name: "Staklenik 2",
		},
		{
			entity_id: "3",
			friendly_name: "Staklenik 3",
		},
		{
			entity_id: "4",
			friendly_name: "Staklenik 4",
		},
	]

	return (
		<div className="max-w-7xl mx-auto px-8">
			{greenhouses && <HoverEffect items={greenhouses} />}
		</div>
	)
}
