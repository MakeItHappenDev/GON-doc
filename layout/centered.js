import React from 'react'

export default (props) => {

  return(
    <>
    <header>Header</header>
    <main>
      {props.children}
    </main>
    <footer>Footer</footer>
    </>
  )

}