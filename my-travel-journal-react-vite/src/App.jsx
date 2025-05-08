import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data/data"


function App() {

  const entryElements = data.map(entry=>{ 
    return (<Entry
      key={entry.id}
      {...entry} //spread operation [react will look at this and it will take all of the individual properties of our entry object and create a new prop that matches each of the properties of this entry object  ]
      // This way works like this.  
      //img={entry.img}
      //title={entry.title}
      //country={entry.country}
      //googleMapLinks={entry.googleMapLinks}
      //date={entry.date}
      //text={entry.text}
      //
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
