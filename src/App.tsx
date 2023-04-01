import React from 'react'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import store from './store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center p-5 sm:p-20'>
          <Home />
        </div>
      </Provider>
    </>
  )
}

export default App