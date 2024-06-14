import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

export const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyMDhhZDA2YzVlNzY0YWNjYTU4ODg2OTg2ZTlkOGM5ZiIsImlhdCI6MTcxNzI0MDIyMCwiZXhwIjoyMDMyNjAwMjIwfQ.0n3lFvGHcv4zS4S4O2zJm4lLaCC5UWZyoOlHWVSlFSA"
