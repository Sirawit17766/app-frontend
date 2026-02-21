import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/home"
import Menu from "./layouts/menu"
import Order from "./pages/orders/order"
import Inventory from "./pages/inventories/inventory"
import Delivery from "./pages/deliveries/delivery"
import Customer from "./pages/customers/customer"
import Report from "./pages/reports/report"
import Setting from "./pages/settings/setting"
import Dashboard from "./pages/dashboard/dashboard"
import CourseDetail from "./pages/course/courseDetail"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route element={<Menu />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/inventories" element={<Inventory />} />
          <Route path="/deliveries" element={<Delivery />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </>
  )
}


export default App