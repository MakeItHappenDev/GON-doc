import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import styles from './centered.module.scss'

export default (props) => {

  return(
    <div className={styles.container}>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )

}