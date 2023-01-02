import React from 'react'
import {Text} from 'react-native'
import { Menu } from './Src/Menu'
import { Pages } from './Src/Pages'

export default function App(){
  return(
    <>
      <Menu options={[{title:'Perfil', icon:''},
                    {title:'Configurações', icon:''},
                    {title:'Recomendações', icon:''}, 
                    {title:'Sobre', icon:''}, 
                    {title:'Sair', icon:''}]}/>
      <Pages/>
    </>
  )
}