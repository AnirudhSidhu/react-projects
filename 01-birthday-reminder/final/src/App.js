import React, { useState, useEffect } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)

  useEffect(() => {
    console.log("Page Reloaded")
  }, [])

  useEffect(()=>{
    console.log('List Changed');
  }, [people])

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople(people.slice(1, people.length))}>Remove first</button>
      </section>
    </main>
  )
}

export default App