/*import { MouseEvent } from "react"*/
interface PropV{
    data: string[]
}
function User({data}: PropV){
    /*const handleClick=(e: MouseEvent)=>{
        console.log(e)
    }
     return(<ul>
        {data.map((elem)=>(<li onClick={handleClick}>{elem}</li>))}</ul>
    );*/
   return(<ul>
        {data.map((elem)=>(<li onClick={(e)=>console.log(e)}>{elem}</li>))}</ul>
    );/*onClick es un mouseEvnt del modulo de react*/
}
export default User