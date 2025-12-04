import Child from "./Child"

function App() {
  let name = "Ambigar Sai"
  let batch = "21"
  return (
    <>
    <h1>Welcome to the Props</h1>
    <Child fname = {name} fbatch = {batch}/>
    </>
  )
}

export default App