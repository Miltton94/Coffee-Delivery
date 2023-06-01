import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CompleteOrder from './pages/CompleteOrder'
import DefaultLayout from './layouts/DefaultLayout'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}

export default Router
