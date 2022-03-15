import { useEffect } from 'react'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders'

const promise = loadStripe(
  'pk_test_51KdRIeSCSMFiGpZK4YEkVFuunIh8vfOXO8Qeh0dY6LnEgX0d0rcS3CE9GDSHGzKADRnDlLsqdN7j0hL0xOZyetUv00TBGOx4B0'
)

function App() {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    //it is an event listener of firebase. It will trigger as soon as user state changes means if user logs in or
    //logs out.
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser)
      console.log(authUser?.email)

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<Orders />} />
          <Route
            path='/payment'
            element={
              <Elements stripe={promise}>
                {' '}
                <Payment />
              </Elements>
            }
          />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
