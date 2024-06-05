"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { usePathname } from "next/navigation"

export const greenhouses = [
	{
		title: "Plastenik 1",
		description: "Plastenik 1 sadrzi paradajz",
		link: "/greenhouse/1",
	},
	{
		title: "Plastenik 2",
		description: "Plastenik 2 sadrzi papriku",
		link: "/greenhouse/2",
	},
	{
		title: "Plastenik 3",
		description: "Plastenik 3 sadrzi krastavac",
		link: "/greenhouse/3",
	},
	{
		title: "Plastenik 4",
		description: "Plastenik 4 sadrzi krumpir",
		link: "/greenhouse/4",
	},
	{
		title: "Plastenik 5",
		description: "Plastenik 5 sadrzi luk",
		link: "/greenhouse/5",
	},
	{
		title: "Plastenik 6",
		description: "Plastenik 6 sadrzi mrkvu",
		link: "/greenhouse/6",
	},
]

export default function Home() {
	const pathname = usePathname()

	return (
		<div className="max-w-7xl mx-auto px-8">
			<HoverEffect items={greenhouses} />
		</div>
	)
}
