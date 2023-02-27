import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Overview } from '../pages/Overview'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Overview></Overview>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
  )
}
