// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=qK4Pco6EZ-5QUGgAx_3ohAEmqGg1fF41tFf26mUddNQ
// const API = "https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=qK4Pco6EZ-5QUGgAx_3ohAEmqGg1fF41tFf26mUddNQ"
const API = "qK4Pco6EZ-5QUGgAx_3ohAEmqGg1fF41tFf26mUddNQ"
import { navbar } from "../Components/navbar.js";
let navbar1 = document.getElementById("navbar")
navbar1.innerHTML= navbar()

import{searchImages ,append} from "./fetch.js"


let search = (e)=>{
    if(e.key==="Enter"){
        let input = document.getElementById("query").value 

        searchImages(API,input).then((data)=>{
            console.log(data)
            let container = document.getElementById("container")
            container.innerHTML= null
            append(data.results,container)
        })
    }
}

document.getElementById('query').addEventListener("keydown",search)

let categories = document.getElementById("categories").children

for(let el of categories){
    el.addEventListener("click",csearch)
}

function csearch(){
console.log(this.id)

// let value = document.getElementById("query").value 

searchImages(API,this.id).then((data)=>{
    console.log(data)
    let container = document.getElementById("container")
    container.innerHTML= null
    append(data.results,container)
})
}
// let searchImages = async()=>{
//     let value = document.getElementById("query").value
//     try{
 
//             let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`)
//             let data = await res.json()
//             console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }