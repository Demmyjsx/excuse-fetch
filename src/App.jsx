import Axios  from "axios"
import { useState } from "react"

export default function App() {
  const [getExcuse, setGetExcuse] = useState();

  const fetchExcuse = (excuse)=>{
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=> {
    setGetExcuse(res.data[0].excuse)
  }).catch(()=>{
    
    setGetExcuse(`nothing to fetch `)
  })
  }
  
  return (
    <div className="flex justify-center flex-col items-center my-20">
      <h2 className="text-3xl">select on excuse you would like to give </h2>
      <button onClick={()=>fetchExcuse('funny')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">funny</button>
      <button onClick={()=>fetchExcuse('gaming')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">gaming</button>
      <button onClick={()=>fetchExcuse('developers')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">developers</button>
      <button onClick={()=>fetchExcuse('unbelievable')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">unbelievable</button>
      <button onClick={()=>fetchExcuse('party')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">party</button>
      <button onClick={()=>fetchExcuse('college')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">college</button>
      <button onClick={()=>fetchExcuse('children')}  className="border-2 rounded-md p-3 bg-slate-400 text-gray-300 ">children</button>
      <p>{getExcuse}</p>
    </div>
  )
}
