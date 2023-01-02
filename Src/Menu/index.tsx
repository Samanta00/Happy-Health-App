import React , {useState} from "react";
import {Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Modal, Dimensions, ScrollView} from 'react-native'



export function Menu(props){
  const [modalVisible, setModalVisible]=useState(false)
  const {width}=Dimensions.get('screen')


  
    return(
        <SafeAreaView style={styles.SafeAreaViewStyle}>

            <View style={styles.viewStyle}>
                  <Image
                      style={styles.stretch}
                      source={require('../Menu/img/doutorDentista.jpg')}
                  />
                  <Text style={{left:300, color:'yellow'}}>Happy Health</Text>
            </View>

             <Text style={styles.textoMapeamento}>Home</Text>

             <Modal transparent visible={modalVisible}>
               <TouchableOpacity onPress={()=>setModalVisible(false)} style={{flex:1}}>

                  <SafeAreaView style={{flex:1, alignItems:'center' } } >
                    <View style={styles.modalView}>

                      <ScrollView>
                              <Image 
                              style={{width:40, height:40, left:85, marginTop:5}}
                              source={require('./img/piscina.jpeg') }
                              />
                            {props.options && props.options.map((item,index)=>(
                                <Text key={index.toString()} style={styles.listaHamburguer}>{item.title}</Text>
                            ))}
                      </ScrollView>


                    </View>
                  </SafeAreaView>
               </TouchableOpacity>

             </Modal>

            <TouchableOpacity style={styles.buttomHamburguer} onPress={()=>setModalVisible(true)}>
                <View style={styles.columHamburguer}/>
                <View style={styles.columHamburguer}/>
                <View style={styles.columHamburguer}/>
            </TouchableOpacity>

      </SafeAreaView>

    )
    
}
const styles = StyleSheet.create({

    SafeAreaViewStyle:{
      width:'100%', backgroundColor:'#007FFF', flexDirection:'row'
    },

    viewStyle:{
      marginHorizontal:15, marginVertical:5, alignItems:'center'
    },

    stretch: {
      width: 40,
      height: 40,
      resizeMode: 'stretch',
      left:320,
      borderRadius:30

    },
    textoMapeamento:{
      color:'#FFFFFF',
      fontSize:18,
      fontWeight:'bold',
      left:75,
      marginTop:22

    },
    buttomHamburguer:{
      borderRadius:3,
      marginTop:20,
      right:120, 
      marginHorizontal:15,
      marginVertical:5,
      
    },
    columHamburguer:{
      backgroundColor:'#000', 
      width:30, 
      height:2,
      marginVertical:2.5,
      
    },
    modalView:{
      width:'50%', 
      minHeight:'50%', 
      maxHeight:'90%', 
      backgroundColor:'white',
      borderRadius:10, 
      elevation:5, 
      marginTop:5,
      shadowColor:'rgba(0,0,0,1)'
    },
    listaHamburguer:{
      marginTop:25,
      fontSize:16,
      fontWeight:'bold',
      textAlign:'center',
     
    }

  });