
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import data from './data'

function App() {
  const cards = data.map((trip) => {
    return <Card
      key={trip.id}
      {...trip}
    />
  })

  return (
    <>
      <Header />
      <section className='card-container'>
        {cards}
      </section>
        
    </>
  )
}

export default App
