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
		`http://homeassistant:8123/api/hassio_ingress/UPL9PbbxBJjN6o0pYyP_o4lzDJa-i2a0eMccylom80c/proxy/9997/staklenik/${entityId}`,
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

export async function updateState(entityId, state, attributes) {
	const response = await fetch(
		`http://homeassistant:8123/api/states/${entityId}`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				state,
				attributes,
			}),
		}
	)
	const data = await response.json()
	console.log("Update State:", data)
	return data
}

export async function fireEvent(eventType, eventData) {
	const response = await fetch(
		`http://homeassistant:8123/api/events/${eventType}`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(eventData),
		}
	)
	const data = await response.json()
	console.log("Fire Event:", data)
	return data
}
