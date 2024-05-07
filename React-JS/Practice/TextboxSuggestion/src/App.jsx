import React, { useState } from 'react'

export default function App() {
  const [Fruit, setFruit] = useState("")
  const FruitList = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Mango",
    "Kiwi",
    "Peach",
    "Cherry",
    "Pear",
    "Plum",
    "Blueberry",
    "Raspberry",
    "Lemon",
    "Lime",
    "Coconut",
    "Pomegranate",
    "Cantaloupe",
    "Apricot",
    "Grapefruit",
    "Avocado",
    "Fig"]
  const filtereditem = FruitList.filter(item => item.toLowerCase().includes(Fruit.toLowerCase()))
  return (
    <div>
      <label htmlFor="">Search fruit name</label>
      <input type="text" name="" id="" value={Fruit} onChange={(e) => setFruit(e.target.value)} />
      {Fruit && (filtereditem.length > 0 ? (filtereditem.map(
        (rresult) => (
          <p>{rresult}</p>
        ))) :
        (<p>Not Found</p>))}
    </div>
  )
}
