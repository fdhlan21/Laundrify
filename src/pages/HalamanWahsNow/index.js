import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, Ordering } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanWash = ({navigation}) => {
    const BackPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={Back} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Ordering</Text>
</View>
</View>

<View style={{padding:10}}>
<View style={{alignItems:'center'}}>
<Image style={{width:370, height:629}} source={Ordering}/>
</View>
<TouchableOpacity onPress={() => navigation.navigate('HalamanPay')} style={{padding:10, backgroundColor:colors.primary, marginTop:30,  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Order</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanWash

const styles = StyleSheet.create({})