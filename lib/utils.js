import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

export const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZjRlMmVlNGE0MWQ0MTk1OGRmODlkYTNhOGViZWY0YSIsImlhdCI6MTcxODEzMzUyMSwiZXhwIjoyMDMzNDkzNTIxfQ.KatLxOzYMjmZe9XxSJAFWr95O8mi-7we0D7K4G5gx-U"
