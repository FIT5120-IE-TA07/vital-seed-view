import NavBar from './navbar'

// this maks the navbar at the top for all pages and all children pages below it
const Layout = ({children}) => {
  return (<div className="layout">
    <NavBar/>
    {children}
  </div>)
}

export default Layout
