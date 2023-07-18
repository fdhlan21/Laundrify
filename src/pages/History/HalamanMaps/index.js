import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Back, BoubleChat, LaundriSukaburis, MyMaps, RateMapsLaundriSukaburi } from '../../../assets'

const HalamanMaps = ({navigation}) => {
    const BackPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
<ScrollView>
       <View style={{alignItems:'center'}}>
        <Image style={{width:360, height:522}} source={MyMaps}  />
       </View>

<View style={{aligntems:'center'}}>

       <View style={{padding:10, flexDirection:'row'}}>
<Image style={{width:225, height:35}} source={LaundriSukaburis} />
  <TouchableOpacity onPress={() => navigation.navigate('HalamanChat')} style={{left:70}}>
   <Image source={BoubleChat} style={{height:36, width:36, }}/>
    </TouchableOpacity>
       </View>

       <View style={{padding:10}}>
<Image  style={{width:271, height:382}}  source={RateMapsLaundriSukaburi} />
       </View>
</View>

</ScrollView>


    </View>
  )
}

export default HalamanMaps

const styles = StyleSheet.create({})