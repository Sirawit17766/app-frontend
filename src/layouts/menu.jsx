import "./menu.css";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  Truck,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", path: "/orders", icon: ShoppingCart },
  { name: "Inventory", path: "/inventories", icon: Boxes },
  { name: "Deliveries", path: "/deliveries", icon: Truck },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Menu() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">StockMage</h2>

        <ul className="menu">
          {menus.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={18} />
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main className="main">
        <header className="header">
          <input placeholder="Search something here..." />
          <div className="profile">Pas Vejchanchai</div>
        </header>

        {/* 🔥 เปลี่ยนเฉพาะตรงนี้ */}
        <Outlet />
      </main>
    </div>
  );
}