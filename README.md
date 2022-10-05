
# Factri

It is small set for util functions




## Installation

Install factri with npm or yarn

```bash
npm i factri
```
```bash
yarn add factri
```
## Functions List


| Name | Description                |
| :-------- | :------------------------- |
| `factory` | Used for creating object instances |
| `extend` | it is equivalent to `extends` keyword for class but here we can extend `factory` instances |




## Usage/Examples

#### factory
```javascript
import { factory } from 'factri'

const Vehicle = factory((t) => {
  
    let fuel = 100 // private variable
  
    t.drive = () => fuel--
  
    t.checkFuel = () => console.log(fuel)
  
    t.refill = (f) => fuel += Math.min(f, 100 - fuel)
  
})

const vehicle = Vehicle()

vehicle.drive()
vehicle.drive()

vehicle.checkFuel() // 98

vehicle.refill(2) 

vehicle.checkFuel() // 100

```


## Authors

- [@keval8solanki](https://github.com/keval8solanki)

