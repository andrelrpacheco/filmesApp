import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Filmes from './src/Filmes/index'
import api from './src/services/api'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filmes: [],
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get('r-api/?api=filmes')
      
      if(response.status === 200) {
        this.setState({
          filmes: response.data,
          loading: false
        })
      }
    } catch (error) {
      console.warn('Ocorreu um erro!')
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color='#333' size={40} />
        </View>
      )
    }else {
      return (
        <View style={styles.container}>
          <FlatList 
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
