import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data/data"


function App() {

  const entryElements = data.map(entry=>{ 
    return (<Entry
      img={entry.img}
      title={entry.title}
      country = {entry.country}
      googleMapsLink = {entry.googleMapsLink}
      dates = {entry.dates}
      text = {entry.text}
    />)
  
})
  return (
  
  <> <Header/>
       <main>
        {entryElements}
       </main>
  
  </>
 )
}
export default App
