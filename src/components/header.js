import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#2eec96',
      marginBottom: '1.45rem',
      position: 'relative', 
      zIndex: 10
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 'normal', color: '#111' }}>
          {siteTitle}
      </h1>
    </div>
  </div>
)

export default Header
