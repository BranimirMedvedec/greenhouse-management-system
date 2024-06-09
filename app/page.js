"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export const greenhouses = [
    {
        title: "Plastenik 1",
        description: "Plastenik 1 sadrzi paradajz",
        link: `/plastenik/1`,
    },
    {
        title: "Plastenik 2",
        description: "Plastenik 2 sadrzi papriku",
        link: `/plastenik/2`,
    },
    {
        title: "Plastenik 3",
        description: "Plastenik 3 sadrzi krastavac",
        link: `/plastenik/3`,
    },
    {
        title: "Plastenik 4",
        description: "Plastenik 4 sadrzi krumpir",
        link: `/plastenik/4`,
    },
    {
        title: "Plastenik 5",
        description: "Plastenik 5 sadrzi luk",
        link: `/plastenik/5`,
    },
    {
        title: "Plastenik 6",
        description: "Plastenik 6 sadrzi mrkvu",
        link: `/plastenik/6`,
    },
]

export default function Home() {

    return (
        <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={greenhouses} />
        </div>
    )
}
