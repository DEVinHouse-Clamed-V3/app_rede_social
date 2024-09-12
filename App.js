import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F56040" />

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/instagram.png')}
        />
        <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
      </View>

      <View>

        <View style={styles.headerPost}>
          <Text>douglinhas</Text>
          <MaterialCommunityIcons name='dots-horizontal' size={30} color="#000" />
        </View>

        <Image style={styles.imagePost} source={{ uri: 'https://i.redd.it/srbsixa0r7081.jpg' }} />

        <View style={styles.footerPost}>
          <MaterialCommunityIcons name='heart-outline' size={30} color="#CCC" />
          <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
          <MaterialCommunityIcons name='share-outline' size={30} color="#CCC" />
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logo: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  },
  imagePost: {
    width: '100%',
    height: 300
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  }
})

