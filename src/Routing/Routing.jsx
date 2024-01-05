import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home'
import NavbarComponents from "../Components/NavbarComponents"
import { NavigationPath } from '../Navigation/Navigation'
import { CreateForm } from '../Pages/CreateForm'

const Routing = () => {
  return (
    <div>
        <NavbarComponents/>
        <Routes>
            <Route path={NavigationPath.Home} element={<Home />}/>
            <Route path={NavigationPath.CreateNew} element={<CreateForm />}/>
            
        </Routes>
    </div>
  )
}

export default Routing;