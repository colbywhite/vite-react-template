import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

import {RootLayout} from './layouts'
import Home from './pages/home'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} >
      <Route path="/" element={<Home />} />
    </Route>
  )
)
