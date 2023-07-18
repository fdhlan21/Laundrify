import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, PanResponder, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconHomeEmpat, IconHomeKedua, IconHomeKetiga, IconHomeLima, IconHomePertama, Location, Notification, ProfileAvatar, Rate4_1, Rate4_2, Rate4_3, Rate4_5, Search } from '../../assets';
const HalamanMainPage = ({navigation}) => {
 const [animation] = useState(new Animated.Value(1));
 const handleNavigation = () => {
    navigation.navigate('HalamanSearch');
  };

  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dy < 0) {
        animation.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dy < -50) {
        Animated.timing(animation, {
          toValue: -300,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          handleNavigation();
          animation.setValue(0);
        });
      } else {
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const animatedStyle = {
    transform: [{ translateY: animation }],
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
 <ScrollView>  
<LinearGradient style={{flex:1}} colors={['#3785A7','rgba(55,133,167,0.5)']}>
<View style={{padding:20, flexDirection:'row'}}>
<Image source={ProfileAvatar}  style={{height:50, width:50}} />
<Text style={{color:'white', fontFamily:'Poppins-Regeular', padding:10}}>Good Morning{'\n'}<Text style={{color:'white', fontFamily:'Poppins-SemiBold', padding:10}}>Michael</Text></Text>
<View style={{marginLeft:'40%'}}>
    <Image source={Notification} style={{height:25,width:25, marginTop:18}} />
</View>
</View>

<View style={{padding:20, bottom:35}}>


<TouchableOpacity 
 {...panResponder.panHandlers}
   onPress={handleNavigation}
 style={{padding:10, borderWidth:1, borderColor:'white', borderRadius:20, flexDirection:'row', }}>
 <Animated.Image
          style={[{ width: 18, height: 18 }, animatedStyle]}
          source={Search}
        />
 <Animated.Text
          style={[
            {
              color: 'white',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              left: 10,
            },
            animatedStyle,
          ]}
        >
          Find in laundrify
        </Animated.Text>
</TouchableOpacity>


</View>
<View style={{padding:20, bottom:68}}>
     <View style={{flexDirection:'row',}}>
        <Image style={{width:20, height:20,}} source={Location}/>
        <Text style={{fontFamily:'Poppins-Regular', color:'white', fontSize:10, top:2}}>Sent to <Text style={{fontFamily:'Poppins-SemiBold'}}>Kosan Michael</Text></Text>
     </View>
     </View>

     <Animated.View style={{padding:10, backgroundColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20, bottom:80, height:'100%'}}>
<View style={{padding:20,}}>
<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12}}>Nearby Laundry</Text>
<View style={{marginTop:10}}>
<TouchableOpacity onPress={() => navigation.navigate('HalamanLaundriFy')}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:87, width:87}} source={IconHomePertama} />
    <Text style={{fontFamily:'Poppins-Regular',}}>Laundrify{'\n'}<Image style={{height:15, width:29}} source={Rate4_3} />{'\n'}
    <Text style={{fontSize:10}}>Taken in 3 minutes  0.2 km</Text>{'\n'}
     <Text style={{fontSize:10}}>Rp. 8000/Kg</Text></Text>
    </View>
</TouchableOpacity>
</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:87, width:87}} source={IconHomeKedua} />
    <Text style={{fontFamily:'Poppins-Regular',}}>Expresss{'\n'}<Image style={{height:15, width:29}} source={Rate4_1} />{'\n'}
    <Text style={{fontSize:10}}>Taken in 9 minutes 0.7 km</Text>{'\n'}
     <Text style={{fontSize:10}}>Rp. 7000/Kg</Text></Text>
    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:87, width:87}} source={IconHomeKetiga} />
    <Text style={{fontFamily:'Poppins-Regular',}}>100 Clean{'\n'}<Image style={{height:15, width:29}} source={Rate4_2} />{'\n'}
    <Text style={{fontSize:10}}>Taken in 8 minutes 0.6 km</Text>{'\n'}
     <Text style={{fontSize:10}}>Rp. 6000/Kg</Text></Text>
    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:87, width:87}} source={IconHomeEmpat} />
    <Text style={{fontFamily:'Poppins-Regular',}}>Blueclean{'\n'}<Image style={{height:15, width:29}} source={Rate4_5} />{'\n'}
    <Text style={{fontSize:10}}>Taken in 4 minutes 0.3 km</Text>{'\n'}
     <Text style={{fontSize:10}}>Rp. 9000/Kg</Text></Text>
    </View>

</View>


<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>
    <Image style={{height:87, width:87}} source={IconHomeLima} />
    <Text style={{fontFamily:'Poppins-Regular',}}>Laundry{'\n'}<Image style={{height:15, width:29}} source={Rate4_3} />{'\n'}
    <Text style={{fontSize:10}}>Taken in 10 minutes 0.9 km</Text>{'\n'}
     <Text style={{fontSize:10}}>Rp. 8000/Kg</Text></Text>
    </View>

</View>

</View>
     </Animated.View>
</LinearGradient>
</ScrollView>   
    </View>
  )
}

export default HalamanMainPage

const styles = StyleSheet.create({})