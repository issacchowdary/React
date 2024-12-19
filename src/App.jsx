import Entry from "./Components/Entry";
import Header from "./Components/Header";
import datas from '../data'
export default function App(){
   const cardData=datas.map((data)=>{
        return <Entry 
        key={data.id}
        data={data}

        />
   })
  return(
    <>
    <Header/>
    <main className="container">
       {cardData}
    </main>
    </>
  )
}