
import Card from '../components/card/card';
import Navbar from '../components/navbar/navbar';
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='container'>
       <h1 className={styles.title}>Civilizations</h1>
       <ul className={styles.list}>
          <li>
            <Card/>
          </li>
          <li>
            <Card/>
          </li>
          <li>
            <Card/>
          </li>
          <li>
            <Card/>
          </li>
          <li>
            <Card/>
          </li>
       </ul>

      </div>
    </>
  )
}
