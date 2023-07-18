import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, IsiChatLoundrify, ProfileChatBawahLoundrify, ProfileChatLoundify, TexTChat } from '../../assets'

const HalamanChat = ({navigation}) => {
  const BackPage = () => {
        navigation.navigate('HalamanMessage')
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
     <View style={{padding:10}}>
<View style={{flexDirection:'row', padding:20}}>
<TouchableOpacity onPress={BackPage}>
 <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
 <Image style={{width:96, height:29, left:20, bottom:6}} source={ProfileChatLoundify}/>
 <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, left:140}}>Chat</Text>
</View>

<View style={{alignItems:'center'}}>
    <Image style={{width:202, height:154,}} source={ProfileChatBawahLoundrify}  />
</View>

<View style={{alignItems:'center', marginTop:50}}>
    <Image style={{width:312, height:333,}} source={IsiChatLoundrify}  />
</View>

<View style={{alignItems:'center', marginTop:'30%'}}>
    <Image style={{width:360, height:60,}} source={TexTChat}  />
</View>

     </View>
     </ScrollView>
    </View>
  )
}

export default HalamanChat

const styles = StyleSheet.create({})