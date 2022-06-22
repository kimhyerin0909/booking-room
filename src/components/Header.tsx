import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className='header-box'>
        <img alt='bssm-logo' src='https://school.busanedu.net/images/web/schl/bssm-h/main/logo.png' />
        <section className='header-btn'>
          <Link to="/" className='home'>교실 예약</Link>
        </section>
      </nav>
    </header>
  )
}