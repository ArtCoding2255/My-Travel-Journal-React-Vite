import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data/data"


function App() {

  const entryElements = data.map(entry=>{ 
    return (<Entry
      key={entry.id}
      entry={entry}
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
