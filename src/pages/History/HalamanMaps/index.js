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
       <View st6yle={{}}>
 
        <Image style={{width:360, height:522}} source={MyMaps}  />
              <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={BackPage}  style={{padding:10, backgroundColor:'white', borderRadius:20, bottom:479, left:30, borderWidth:1}}>
 <Image style={{width:10, height:10}} source={Back} />
</TouchableOpacity>
       </View>
       </View>

       <View style={{padding:10, flexDirection:'row'}}>
<Image style={{width:225, height:35}} source={LaundriSukaburis} />
  <TouchableOpacity onPress={() => navigation.navigate('HalamanChat')} style={{left:70}}>
   <Image source={BoubleChat} style={{height:36, width:36, }}/>
    </TouchableOpacity>
       </View>

       <View style={{padding:10}}>
<Image  style={{width:271, height:382}}  source={RateMapsLaundriSukaburi} />
       </View>
</ScrollView>


    </View>
  )
}

export default HalamanMaps

const styles = StyleSheet.create({})