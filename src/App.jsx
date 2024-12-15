import './App.css'
import Header from './components/Header';
import Entry from './components/Entry';
import data from './data';

function App() {
  const entryElements = data.map((entry) => {
    return(
      <Entry
      key = {entry.id}
      {...entry}
      /*entry = {entry}*/
      /*img = {entry.img}
      title = {entry.title}
      country = {entry.country}
      googleMap = {entry.googleMapsLink}
      dates = {entry.dates}
      description = {entry.text}*/
       />
    )
  })

  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

export default App
