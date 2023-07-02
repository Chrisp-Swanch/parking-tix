import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import AddDispute from './AddDispute'
import DisputesList from './DisputesList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import { getUser } from '../actions/users'
import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'

// Temp/hardcoded user id of 1. This will change when we get Auth0 set up
const userId = 1

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser(userId))
    dispatch(getDisputes(userId))
    dispatch(getEmails(userId))
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>Parking • Tix </h1>
      </header>
      <section className="main">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disputes" element={<DisputesList />} />
          <Route path="/disputes/add" element={<AddDispute />} />
        </Routes>
      </section>
    </>
  )
}

export default App
