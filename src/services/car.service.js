'use strict'

import { dbService } from './db.service.js'

const KEY = 'cars'

export const carService = {
    query,
    get,
    remove,
    save,
    getEmptyCar,
}

async function query() {
    var cars = await dbService.query(KEY)

    console.log(cars)
    if (!cars || !cars.length) {
        cars = _createDefaultCars()
        await dbService.insert(KEY, cars)
    }
    return cars
}

function get(id) {
    return dbService.get(KEY, id)
}

function remove(id) {
    return dbService.remove(KEY, id)
}

function save(car) {
    if (car._id) return dbService.put(KEY, car)
    else return dbService.post(KEY, car)
}

function getEmptyCar() {
    return {
        vendor: '',
        speed: 0,
    }
}

function _createDefaultCars() {
    return [
        _createCar('audi', 50),
        _createCar('fiat', 73),
        _createCar('honda', 100),
        _createCar('suzuki', 100),
    ]
}

function _createCar(vendor, speed) {
    return {
        vendor,
        speed,
    }
}
