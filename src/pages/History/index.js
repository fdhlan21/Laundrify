import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LondriFyHistory, Pay_History, PriceTotal, SearchHistory, isiHistory } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanHistory = ({navigation}) => {
  return (
    <View style={{flex:1, backroundColor:'white'}}>
      <ScrollView>
        <View style={{flexDirection:'row', padding:10, justifyContent:'flex-end', margin:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:15,}}>History</Text>
        </View>

        <View style={{padding:10, marginTop:20}}>
<View style={{alignItems:'center'}}>
<Image style={{width:312, height:78}} source={SearchHistory}/>
</View>

<TouchableOpacity onPress={() => navigation.navigate('HalamanPay')}>
<View style={{marginTop:20, alignItems:'center'}}>
<Image style={{width:280, height:40}} source={LondriFyHistory}/>
</View>
</TouchableOpacity>

<View style={{flexDirection:'row', justifyContent:'space-between', }}>

<Image style={{width:53, height:27, left:35}} source={PriceTotal}/>

<TouchableOpacity onPress={() => navigation.navigate('HalamanPaySuccess')} style={{padding:10, right:10}}>
<Image style={{width:78, height:21}} source={Pay_History}/>
</TouchableOpacity>

</View>

<View style={{marginTop:0, alignItems:'center'}}>
<Image style={{width:312, height:414}} source={isiHistory}/>
</View>
        </View>
      </ScrollView>

    </View>
  )
}

export default HalamanHistory

const styles = StyleSheet.create({})