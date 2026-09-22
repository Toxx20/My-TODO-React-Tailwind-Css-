import { useState,useEffect } from "react"
import { fetchJson,dataCreated } from "../function/overall.js"
import { Data } from "../components/Data.jsx"
import { Input } from "../components/Input"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"


/**
 * 
 * @param {boolean} ThemeTodo 
 * @param {Function} FnDarkTheme 
 * @param {Function} FnLightTheme 
 * @returns {JSX}
 */
export function BodyContainer({ThemeTodo,FnDarkTheme,FnLightTheme}) {
      //données
      const[data,setdata]=useState([])

      //filtrage des données
      const [modeHidden,setModeHidden]=useState('all')
      
      //Récupérer les donnnées dans JSONplaceholder
      useEffect(()=>{
        fetchJson("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((d) => {setdata(d)})
      },[])

      //Changement d'état de la checkbox
      function toggleCompleted(id) {
        setdata(prev =>
          prev.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
          )
        )
      }

      //Supprimer un data
      function toggleDeleteTodo(id){
        setdata(prev =>
          prev.filter(el=> el.id !== id)
        )
      }

      //Avant l'affichage
      const displayData = modeHidden === "hidden"?data.filter(el => el.completed === false):data

      //Affichage des données
      const dataMap= displayData.map((e,i)=>
        <Data key={i} title={e.title} valueChecked={e.completed}  onClick={() => toggleCompleted(e.id)} onDeleteData={()=> toggleDeleteTodo(e.id)} ></Data>
      )


      //Envoyer les données entrés
      const [postData,setPostData]=useState('')

      //Empêcher la soumition du formulaire
      function handleSubmit(e){
        e.preventDefault()
      }

      //valider les données en entrant avec la touche 'Enter'
      function handleKeyDown(e){
        if (e.key === 'Enter') {
            setdata(prev =>[dataCreated(data.length+1,postData),...prev])
            setPostData('')
          }
        }

      //Ajouter les données en cliquant sur le bouton Plus
      function handleClickAdd(){
        setdata(prev =>[dataCreated(data.length+1,postData),...prev])
            setPostData('')
      }

      const loading = <div className="text-amber-500">Loading data ...</div>

      //Compter le nombre de todo de valeur true
      const nbTrueData= data.filter(el =>el.completed === true).length

      const test = modeHidden === "all"

      const HideTasks = () => setModeHidden("hidden")
      const ShowTasks = () => setModeHidden("all")



      return (
        <>
        <Header ButtonSwitch={test} FnHideTasks={HideTasks} FnShowTasks={ShowTasks} ThemeTodo={ThemeTodo} FndarkTheme={FnDarkTheme} FnlightTheme={FnLightTheme} ></Header>
        <div className="body--container">
          <Input value={postData} onChange={setPostData} onSubmit={handleSubmit} onKeyDown={handleKeyDown} onClickButtonAdd={handleClickAdd} ></Input>
          {dataMap.length !== 0 ?(dataMap):(loading)}
        </div>
        <Footer remaining={nbTrueData}></Footer>
        </>
      );
    }


