import { Suspense } from 'react'
import './App.css'
import BoxIcon from './Components/BoxIcon'
import Header from './Components/Header'
import NextBox from './Components/NextBox'
import FirstPage from './Pages/FirstPage'
import NextPage from './Pages/NextPage'
import Page from './Pages/Page'
import SecondPage from './Pages/SecondPage'

function App() {
  return (
    <Suspense fallback={<h1 style={{position:"fixed", top:"50%", right:"50%", left:0,bottom:0, backgroundColor:"red",fontSize:"100px"}}>loading</h1>}>
    <div className="App">
      <Header />
      <NextBox />
      <BoxIcon />
      <Page />
      <NextPage />
      <SecondPage />
      <FirstPage />
    </div>
    </Suspense>
  )
}

export default App
