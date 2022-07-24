import { useRef } from 'react'
import './App.css'
import { Text } from './components'


const Emphasis = ({children}:{children: React.ReactText}) => {
  return <em style={{background:'Yellow', color:"black", fontSize: '40px'}}>{children}</em>
}
function App() {
  const ref = useRef<HTMLAnchorElement | null>(null)

  return (
    <div className="App">
      <Text   color='violet' as='h1'>Hello</Text>
      <Text  as='h2'>Hello</Text>
      <Text ref={ref} href='twitter.com'  as='a'>Hello</Text>
      <Text as={Emphasis}>You are Awesome!!!</Text>
    </div> 
  )
}

export default App
