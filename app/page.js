"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { usePathname } from "next/navigation"

const isLocal = process.env.NODE_ENV === "development";
const baseUrl = isLocal ? "http://localhost:3000" : "https://greenhouse-management-system.vercel.app";

export const greenhouses = [
    {
        title: "Plastenik 1",
        description: "Plastenik 1 sadrzi paradajz",
        link: `${baseUrl}/plastenik/1`,
    },
    {
        title: "Plastenik 2",
        description: "Plastenik 2 sadrzi papriku",
        link: `${baseUrl}/plastenik/2`,
    },
    {
        title: "Plastenik 3",
        description: "Plastenik 3 sadrzi krastavac",
        link: `${baseUrl}/plastenik/3`,
    },
    {
        title: "Plastenik 4",
        description: "Plastenik 4 sadrzi krumpir",
        link: `${baseUrl}/plastenik/4`,
    },
    {
        title: "Plastenik 5",
        description: "Plastenik 5 sadrzi luk",
        link: `${baseUrl}/plastenik/5`,
    },
    {
        title: "Plastenik 6",
        description: "Plastenik 6 sadrzi mrkvu",
        link: `${baseUrl}/plastenik/6`,
    },
]

export default function Home() {
    const pathname = usePathname();

    return (
        <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={greenhouses} />
        </div>
    )
}
