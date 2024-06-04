"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export const greenhouses = [
	{
		title: "Plastenik 1",
		description: "Plastenik 1 sadrzi paradajz",
		link: "http://localhost:3000/plastenik/1",
	},
	{
		title: "Plastenik 2",
		description: "Plastenik 2 sadrzi papriku",
		link: "http://localhost:3000/plastenik/2",
	},
	{
		title: "Plastenik 3",
		description: "Plastenik 3 sadrzi krastavac",
		link: "http://localhost:3000/plastenik/3",
	},
	{
		title: "Plastenik 4",
		description: "Plastenik 4 sadrzi krumpir",
		link: "http://localhost:3000/plastenik/4",
	},
	{
		title: "Plastenik 5",
		description: "Plastenik 5 sadrzi luk",
		link: "http://localhost:3000/plastenik/5",
	},
	{
		title: "Plastenik 6",
		description: "Plastenik 6 sadrzi mrkvu",
		link: "http://localhost:3000/plastenik/6",
	},
]

export default function Home() {
	return (
		<div className="max-w-7xl mx-auto px-8">
			<HoverEffect items={greenhouses} />
		</div>
	)
}
