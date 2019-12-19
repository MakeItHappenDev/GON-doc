import React from 'react'
import Link from 'next/link'

import styles from './footer.module.scss'

export default () => {
  return(
    <footer className={styles.footer}>
      <nav>
       <a href="https://github.com/MakeItHappenDev/Graph-Object-Notation/graphs/contributors" target="_blank" rel="noopener noreferrer">Contributors</a>
        
      </nav>
    </footer>
  )
}