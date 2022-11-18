// ===================== task 1 =====================

class Stack {
  constructor(limit = 10) {
    if(!limit || typeof limit !== 'number' || isNaN(limit) || limit < 1) {
      throw new Error('Invalid limit value')
    }
    this.items = {}
    this.limit = limit
    this.count = 0
  }

  push(element) {
    if(this.count === this.limit) {
      throw new Error('Limit exceeded')
    }
    this.items[this.count] = element
    this.count += 1   
    return this.count - 1
  }

  pop() {
    if(this.count === 0) {
      throw new Error('Empty stack')
    }
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    return deleteItem
     
  }

  peek() { 
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() { 
    return this.count
  }
   
  toArray() {
    return Object.values(this.items)
  }

  static fromIterable(iterable) {
    if(!iterable || iterable === null || iterable === undefined || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable')
    }
    const newStack = new Stack()
    for(let i of iterable) {
      newStack.limit++
      newStack.push(i)
    }
    return newStack
  }
}

// ===================== task 2 =====================

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next 
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  
  append(data) {
    const node = new Node(data)

    if(this.tail) {
      this.tail.next = node
    }
    if(!this.head) {
      this.head = node
    }   
    this.tail = node
  }
  
  prepend(data) {
    const node = new Node(data, this.head)   
    this.head = node
    
    if(!this.tail) {
      this.tail = node
    }
  }
  
  find(data) {
    if(!this.head) {
      return
    }
    let current = this.head
   
    while (current) {
      if(current.data === data) {
        return current
      }  
      current = current.next
    }
  }
  
  toArray() {
    const output = []
    let current = this.head
    
    while (current) {
      output.push(current)
      current = current.next
    }    
    return output
  }

  static fromIterable(iterable) {
    if(!iterable || iterable === null || iterable === undefined || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable')
    }
    const newLinkedList = new LinkedList()
    for(let i of iterable) {
      newLinkedList.append(i)
    }
    return newLinkedList
  } 
}

// ===================== task 3 =====================

class Car {

  #brand = ''
  #model = ''
  #yearOfManufacturing = 1950
  #maxSpeed = 100
  #maxFuelVolume = 20
  #fuelConsumption = 1
  #damage = 1
 
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0
  #health = 100
  
  set brand(str) {
    if(typeof str !== 'string' || str.length < 1 || str.length > 50) {
      throw new Error('Invalid brand name')
    }
    this.#brand = str
  }
  get brand() {
    return this.#brand
  }
 
  set model(str) { 
    if(typeof str !== 'string' || str.length < 1 || str.length > 50) {
      throw new Error('Invalid model name')
    }
    this.#model = str
  } 
  get model() {
    return this.#model
  }

  set yearOfManufacturing(num) {
    if(typeof num !== 'number' || isNaN(num) || num < 1950 || num > 2022) {
      throw new Error('Invalid year of manufacturing')
    }
    this.#yearOfManufacturing = num
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing
  }

  set maxSpeed(num) {
    if(typeof num !== 'number' || isNaN(num) || num < 100 || num > 330) {
      throw new Error('Invalid max speed')
    }
    this.#maxSpeed = num
  }
  get maxSpeed() {
    return this.#maxSpeed
  }

  set maxFuelVolume(num) {
    if(typeof num !== 'number' || isNaN(num) || num < 20 || num > 100) {
      throw new Error('Invalid max fuel volume')
    }
    this.#maxFuelVolume = num
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume
  }

  set fuelConsumption(num) {
    if(typeof num !== 'number' || isNaN(num) || num < 0) {
      throw new Error('Invalid fuel consumption')
    }
    this.#fuelConsumption = num
  }
  get fuelConsumption() {
    return this.#fuelConsumption
  }

  set damage(num) {
    if(typeof num !== 'number' || isNaN(num) || num < 1 || num > 5) {
      throw new Error('Invalid damage')
    }
    this.#damage = num
  } 
  get damage() {
    return this.#damage
  } 

  get currentFuelVolume() {
    return this.#currentFuelVolume
  }
  get isStarted() {
    return this.#isStarted
  }
  get health() {
    return this.#health
  }
  get mileage() {
    return this.#mileage
  } 

  start() {
    if(this.#isStarted) {
      throw new Error('Car has already started')
    }
    this.#isStarted = true
  }

  shutDownEngine() {
    if(!this.#isStarted) {
      throw new Error('Car hasn\'t started yet')
    }
    this.#isStarted = false
  }

  fillUpGasTank (liters) {
    if(!liters || typeof liters !== 'number' || isNaN(liters) || liters <= 0 ) {
      throw new Error('Invalid fuel amount')
    }
    if(this.#maxFuelVolume < liters + this.#currentFuelVolume) {
      throw new Error('Too much fuel')
    }
    if(this.#isStarted) {
      throw new Error('You have to shut down your car first')
    }
    this.#currentFuelVolume += liters
  }

  drive (speed, hours) {
    if(!speed || typeof speed !== 'number' || isNaN(speed) || speed <= 0 ) {
      throw new Error('Invalid speed')
    }
    if(!hours || typeof hours !== 'number' || isNaN(hours) || hours <= 0 ) {
      throw new Error('Invalid duration')
    }
    if(!this.#isStarted) {
      throw new Error('You have to start your car first')
    }
    if(speed > this.#maxSpeed) {
      throw new Error('Car can\'t go this fast')
    }
    if(this.#currentFuelVolume < (speed * hours * this.#fuelConsumption) / 100) { 
      throw new Error('You don\'t have enough fuel')
    }
    if(this.#health < (speed * hours * this.#damage) / 100) {
      throw new Error('Your car won\'t make it')
    }

    const ACTUAL_SPEED = speed
    ACTUAL_SPEED.toFixed(1) 
    const TRAVEL_TIME = hours
    TRAVEL_TIME.toFixed(1)
    const DISTANCE = ACTUAL_SPEED * TRAVEL_TIME
    DISTANCE.toFixed(1)
    const ACTUAL_DAMAGE = (this.#damage / 100) * DISTANCE
    ACTUAL_DAMAGE.toFixed(1)
    const ACTUAL_FUEL_CONSUMPTION = (this.#fuelConsumption / 100) * DISTANCE 
    ACTUAL_FUEL_CONSUMPTION.toFixed(1) 
    
    this.#currentFuelVolume -= ACTUAL_FUEL_CONSUMPTION
    this.#currentFuelVolume.toFixed(1)
    this.#health -= ACTUAL_DAMAGE
    this.#health.toFixed(1)
    this.#mileage += DISTANCE
    this.#mileage.toFixed(1)
  }

  repair() {
    if(this.#isStarted) {
      throw new Error('You have to shut down your car first')
    }
    if(this.#currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error('You have to fill up your gas tank first')
    }
    this.#health = 100
  }

  getFullAmount() {
    if(this.#currentFuelVolume === this.#maxFuelVolume) {
      return 0
    }
    return (this.maxFuelVolume - this.#currentFuelVolume).toFixed(1)
  }
}
