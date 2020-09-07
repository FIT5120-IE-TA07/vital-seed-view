import NavBar from './navbar'
import Footer from './footer';

// this maks the navbar at the top for all pages and all children pages below it
const Layout = ({children}) => {
  return (<div className="layout">
    <NavBar/>
    {children}
    <Footer/>
  </div>)
}

export default Layout
