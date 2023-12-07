import { useState } from 'react'
import { Navar } from './section/navbar/Navar'
import { Baner } from './section/banar/Baner'
import Brand from './section/brand/Brand'
import Solution from './section/solution/Solution'
import Goals from './section/goals/goals'
import Plan from './section/plan/Plan'
import Demo from './section/demo/Demo'
import Team from './section/team/Team'
import Start from './section/start/Start'
import Footer from './section/foot/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navar/>
      <Baner/>
      <Brand/>
      <Solution/>
      <Goals/>
      <Plan/>
      <Demo/>
      <Team/>
      <Start/>
      <Footer/>
    </>
  )
}
export default App