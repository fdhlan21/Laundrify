import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Back, CencelIcon, OrderDetails, Ordering, RiviewRate } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanRiview = ({navigation}) => {
    const BackPage = () => {
        navigation.navigate('HalamanMainPage');
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
       <View style={{padding:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
    <Image style={{width:15, height:15}} source={CencelIcon} />
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15}}>Ordering Details</Text>
</View>
</View>

<View style={{padding:10}}>

<View style={{alignItems:'center'}}>
<Image style={{width:313, height:434}} source={RiviewRate}/>
</View>
<TouchableOpacity onPress={() => navigation.navigate('HalamanHistory')} style={{padding:10, backgroundColor:colors.primary, marginTop:'66%',  borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center', color:'white',}}>Send</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>
  )
}

export default HalamanRiview

const styles = StyleSheet.create({})