import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Filmes from './src/Filmes/index'
import api from './src/services/api'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filmes: []
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get('r-api/?api=filmes')
      console.log({ response })
      if(response.status === 200) {
        this.setState({
          filmes: response.data
        })
      }
    } catch (error) {
      console.warn('Ocorreu um erro!')
    }
  }

  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
