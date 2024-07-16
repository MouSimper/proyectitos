import React, { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

const users=[
    {
        userName:'simpermou',
        name:'MouSimper',
        isFollowing:true
    },
    {
        userName:'midudev',
        name:'Miguel Ángel Durán',
        isFollowing:false
    },
    {
        userName:'Vegetta777',
        name:'Samuel de Luque',
        isFollowing:true
    },
    {
        userName:'ManUtd',
        name:'Manchester United',
        isFollowing:false
    }
]

export function App(){
    return(
        <section className="App ">
        {
            users.map(user=>{
                const{userName,name,isFollowing}=user
                return(
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    name={name}
                    initialisFollowing={isFollowing}
                    />
                )
            })
        }

        </section>
    )
}