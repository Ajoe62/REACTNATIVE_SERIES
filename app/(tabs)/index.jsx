import { StyleSheet, Text, View, Image } from 'react-native';
import favicon from '../../assets/images/favicon.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={styles.img} />
      <Text style={styles.title}>LEARNING REACT NATIVE</Text>
      <Text style={{ marginTop: 10, marginBottom: 50, color: 'white', fontWeight: 'bold' }}>This is a simple app to learn react native</Text>

      <View  style={styles.card}>
        <Text style={[styles.cardText, { color: '#000' }]}>Hello, this is a card</Text>
      </View>
      <View style={styles.lightBluecard}>
        <Text style={[styles.cardText, { color: '#000' }]}>Getting Started</Text>
      </View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  lightBluecard: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    width: 300,
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  }

})