import React,{useState,useEffect} from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'
import Form from './components/form/Form'
import './app.css'


export default function App(){

    //for reading api data 
        const [apiData,setApiData] = useState([]);
        async function fetchApi(url,setData){
            return fetch(url)
            .then(res=>res.json())
            .then(json=>setData(json))
            
        }
        useEffect(()=>{
            fetchApi("https://api.tvmaze.com/search/shows?q=all",setApiData);
        },[])
    // completed


    //moviecontent
    const [content,setContent] = useState({})
    //showform
    const [showForm,setShowForm] = useState(false);
    //seates 
    return <div className={showForm ? "main blur" : "main"} >
        <Sidebar data={apiData} setData={setApiData} content={content} setContent={setContent}/>     
        { content && <Content data={apiData} content={content} setContent={setContent} showForm={showForm} setShowForm={setShowForm}/>}
        { showForm && <Form 
                   showForm={showForm} 
                   setShowForm={setShowForm} 
                   content={content}
                   />
                   }
    </div>
}