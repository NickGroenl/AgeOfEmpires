// eslint-disable-next-line react-hooks/exhaustive-deps
import {useEffect} from 'react';
import Card from '../components/card/card';
import Navbar from '../components/navbar/navbar';
import fetchByName from '../resources/get';
import styles from '../styles/Home.module.css';
import {selectCivilizations, setCivilizations} from '../store/slice';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FloatButton from '../components/floatButton';



const Home =() => {
  const {civilizations} = useAppSelector(selectCivilizations);
  const dispatch = useAppDispatch();
  
  const getCivilizations = async () => {
    if(civilizations?.length === 0){
      const res = await fetchByName('civilizations');
      dispatch(setCivilizations(res?.civilizations))
    }
  }
  
  useEffect(() => {
    getCivilizations();
  }, []);
  return (
    <>

      <Navbar/>
      <div className='container'>
       <h1 className={styles.title}>Civilizations</h1>
       <ul className={styles.list}>
          {civilizations?.map(function(array, index){
            return(
              <li key={index}>
                <Card name={array.name} id={array.id} expansion={array.expansion} army_type={array.army_type} unique_unit={array.unique_unit} unique_tech={array.unique_tech} team_bonus={array.team_bonus} civilization_bonus={array.civilization_bonus}/>
              </li>
            )
          })}
       </ul>

      </div>
      <FloatButton/>
    </>
  )
}
export default Home;
