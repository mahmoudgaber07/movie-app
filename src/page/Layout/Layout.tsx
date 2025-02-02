import { Outlet } from "react-router"
import Nav from "./component/Nav"
import Footer from "./component/Footer"
const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout