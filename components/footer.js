import React from 'react'
import Link from 'next/link'

import styles from './footer.module.scss'

export default () => {
  return(
    <footer className={styles.footer}>
      <nav>
        <Link href="/contributors"><a>contributors</a></Link>
      </nav>
    </footer>
  )
}