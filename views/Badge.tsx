import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Stack, Avatar } from "@react-native-material/core";
import { qr } from '../assets/qr-code.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.badge}>
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            <Text style={styles.text}>Mikko Meikäläinen</Text>
            <Image source={qr} style={styles.qr} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    badge: {    
        width: width * 0.7,
        height: height * 0.5,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    qr: {
        width: 100,
        height: 100,
    }
});
