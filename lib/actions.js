"use server"
import { token } from "./utils"

export async function checkApiStatus() {
	const response = await fetch("http://homeassistant:8123/api/", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	return data
}

export async function getServices() {
	const response = await fetch("http://homeassistant:8123/api/services", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	console.log("Services:", data)
	return data
}

export async function getEvents() {
	const response = await fetch("http://homeassistant:8123/api/events", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	console.log("Events:", data)
	return data
}

export async function getStates() {
	const response = await fetch("http://homeassistant:8123/api/states", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	console.log("States:", data)
	return data
}

export async function getState(entityId) {
	const response = await fetch(
		`http://homeassistant:8123/api/states/${entityId}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	const data = await response.json()
	console.log("State:", data)
	return data
}

export async function getHistory(entityIds) {
	const entities = entityIds.join(",")

	const response = await fetch(
		`http://homeassistant:8123/api/history/period?filter_entity_id=${entities}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	const data = await response.json()
	console.log("History:", data)
	return data
}

export async function getHistoryTimestamp(timestamp, entities) {
	const entityIds = entities.join(",")
	const response = await fetch(
		`http://homeassistant:8123/api/history/period/${timestamp}?filter_entity_id=${entityIds}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	const data = await response.json()
	console.log("History Timestamp:", data)
	return data
}

export async function getErrorLog() {
	const response = await fetch("http://homeassistant:8123/api/error_log", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.text()
	console.log("Error Log:", data)
	return data
}
