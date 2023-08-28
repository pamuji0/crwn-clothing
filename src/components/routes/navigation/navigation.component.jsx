import React from 'react'
import { Fragment } from 'react'
import { Link,Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../../asset/crown.svg'
import './navigation.style.scss'

export default function Navigation() {
  return (
    <Fragment>
         <div className="navigation">
        <Link
          className="logo-container"
          to="/"
        >
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/shop"
          >
            SHOP
          </Link>
          <Link
            className="nav-link"
            to="/auth"
          >
            SIGN IN
          </Link>
        </div>
        
      </div>
      <Outlet />
    </Fragment>
  )
}
