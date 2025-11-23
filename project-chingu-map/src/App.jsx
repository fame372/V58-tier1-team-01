import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TeamCard from './components/TeamCard.jsx'
import UsersTable from './components/UsersTable.jsx'
  
function App() {
  
  return (
    <>
      <Header />
      <Hero /> 
      <TeamCard />
      <UsersTable />
      <Footer />
    </>
  )
}

export default App