import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../styles/general.scss'
import styles from './index.module.scss'

const Home = () => {

  const [endpoint,setEndpoint] = useState('functionQL')
  const [json,setJson] = useState('loading...')

  

  useEffect(()=>{
    (async function loadAPI(endpoint){
      setJson('loading ...')
      const response = await axios.get(`/api/${endpoint}`)
      setJson(JSON.stringify(response.data,null,1))
    })(endpoint)
  },[endpoint])

  return (
    <main>
     <h1>Graph Object Notation demo</h1>
     <p><a href="https://github.com/MakeItHappenDev/GraphObjectNotation" target="_blank" rel="noopener noreferrer">Link to the source code</a></p>
     <nav className={styles.nav}>
       <p className={endpoint==="functionQL"?styles.selected:null} onClick={()=>setEndpoint('functionQL')}>functionQL</p>
       <p className={endpoint==="treeQL"?styles.selected:null} onClick={()=>setEndpoint('treeQL')}>treeQL</p>
       <p className={endpoint==="circularQL"?styles.selected:null} onClick={()=>setEndpoint('circularQL')}>circularQL</p>
       <p className={endpoint==="currentQL"?styles.selected:null} onClick={()=>setEndpoint('currentQL')}>currentQL</p>
       <p className={endpoint==="goalQL"?styles.selected:null} onClick={()=>setEndpoint('goalQL')}>goalQL</p>
     </nav>
     <pre>
       {json}
     </pre>
    </main>
  )
}

export default Home
