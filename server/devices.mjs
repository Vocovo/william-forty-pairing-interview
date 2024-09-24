import EventEmiter from 'node:events'
import { createId } from '@paralleldrive/cuid2'

const DEVICE_DATA_LIMIT = 50
const DEVICE_EVENTS_FREQUENCY_MS = 5000; 

const types = [
    'headset',
    'callpoint',
    'base unit',
    'controller',
    'keypad'
]

const status = [
    'online',
    'offline',
]

let devicesData = [
    generateNewDevice(),
    generateNewDevice(),
    generateNewDevice(),
    generateNewDevice()
]

const deviceEventEmitter = new EventEmiter();

function generateNewDevice() {
    let currentDate = new Date()
    return {
        "id": createId(),
        "type": types[Math.floor(Math.random() * (types.length - 1))],
        "status": status[Math.floor(Math.random()) * (status.length - 1)],
        "created": currentDate.toISOString(),
        "updated": currentDate.toISOString()
    }
}

function generateDeviceUpdate() {
    let currentDate = new Date()
    let randomIndex = randomInt(devicesData.length - 1)
    return {
        ...devicesData[randomIndex],
        updated: currentDate.toISOString()
    }
}

function generateDeviceEvent() {
    let coin = Math.random()
    if (coin < 0.5 && devicesData.length < DEVICE_DATA_LIMIT) {
        deviceEventEmitter.emit('deviceUpdate', generateNewDevice())
    } else {
        deviceEventEmitter.emit('deviceUpdate', generateDeviceUpdate())
    }

}

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

setInterval(generateDeviceEvent, DEVICE_EVENTS_FREQUENCY_MS)

export { devicesData, deviceEventEmitter }
