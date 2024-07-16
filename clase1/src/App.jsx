import React, { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"



export function App(){
    const [name, setName] = useState('simpermou')
    return(
        <section className="App ">
        <TwitterFollowCard  initialisFollowing={true} userName={name} name="MouSimper" />
        <TwitterFollowCard  initialisFollowing={true} userName="midudev" name="Miguel Ángel Durán" />
        <TwitterFollowCard  userName="Vegetta777" name="Samuel de Luque"/>
        <TwitterFollowCard  userName="ManUtd" name="Manchester United"/>

        <button onClick={()=>setName('realmadrid')}>
            Cambio nombre
        </button>
        </section>
    )
}