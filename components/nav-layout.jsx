"use client"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
	Home,
	Leaf,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	ShoppingCart,
	Sprout,
	Users2,
} from "lucide-react"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

const navLinks = [
	{
		href: "/",
		icon: <Home className="h-5 w-5" />,
		label: "Home",
	},
	{
		href: "/greenhouse",
		icon: <Sprout className="h-5 w-5" />,
		label: "Greenhouse",
	},
	{
		href: "/settings",
		icon: <Settings className="h-5 w-5" />,
		label: "Settings",
	},
]

export function NavLayout({ children }) {
	const path = usePathname()
	const pathNames = path.split("/").filter(Boolean)

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
					<Link
						href="/"
						className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
						<Leaf className="h-4 w-4 transition-all group-hover:scale-110" />
						<span className="sr-only">
							Greenhouse Management System
						</span>
					</Link>
					<TooltipProvider>
						{navLinks.slice(0, -1).map((link, index) => (
							<Tooltip key={index}>
								<TooltipTrigger asChild>
									<Link
										href={link.href}
										className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
										{link.icon}
										<span className="sr-only">
											{link.label}
										</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right">
									{link.label}
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</nav>
				<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={navLinks[navLinks.length - 1].href}
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
									{navLinks[navLinks.length - 1].icon}
									<span className="sr-only">
										{navLinks[navLinks.length - 1].label}
									</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								{navLinks[navLinks.length - 1].label}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								size="icon"
								variant="outline"
								className="sm:hidden">
								<PanelLeft className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="sm:max-w-xs">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="/"
									className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
									<Leaf className="h-5 w-5 transition-all group-hover:scale-110" />
									<span className="sr-only">
										Greenhouse Management System
									</span>
								</Link>
								{navLinks.map((link, index) => (
									<Link
										key={index}
										href={link.href}
										className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
										{link.icon}
										{link.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<Breadcrumb className="hidden md:flex">
						<BreadcrumbList>
							{pathNames.map((name, index) => (
								<>
									{index > 0 && <BreadcrumbSeparator />}
									<BreadcrumbItem key={index}>
										<BreadcrumbLink asChild>
											<Link
												href={`/${path
													.split("/")
													.slice(1, index + 1)
													.join("/")}`}>
												{name}
											</Link>
										</BreadcrumbLink>
									</BreadcrumbItem>
								</>
							))}
						</BreadcrumbList>
					</Breadcrumb>
					<div className="relative ml-auto flex-1 md:grow-0">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
						/>
					</div>
					<ModeToggle />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="overflow-hidden rounded-full">
								<Image
									src="/vercel.svg"
									width={36}
									height={36}
									alt="Avatar"
									className="overflow-hidden rounded-full"
								/>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>
								<Link href="/account">My Account</Link>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href="/settings">Settings</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href="/login">Login</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/logout">Logout</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main>{children}</main>
			</div>
		</div>
	)
}
