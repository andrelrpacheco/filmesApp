import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native'

class Filmes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }

        this.abrir = this.abrir.bind(this)
        this.fechar = this.fechar.bind(this)
    }

    abrir() {
        this.setState({ modalVisible: true })
    }

    fechar(isVisible) {
        this.setState({modalVisible: isVisible})
    }

    render() {
        const { nome, foto, sinopse } = this.props.data
        return (
            <View>
                
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>

                    <Image
                        source={{ uri: foto }}
                        resizeMode='cover'
                        style={styles.capa}
                    />

                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btnSinopse} onPress={this.abrir}>
                        <Text style={styles.sinopse}>Sinopse</Text>
                        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
                            <View style={styles.modal}>
                                <View style={styles.sizeModal}>
                                    <Text style={styles.tituloFilme}>{nome}</Text>
                                    <Text style={styles.sinopseModal}>{sinopse}</Text>
                                    
                                    <View style={styles.areaModal}>
                                        <TouchableOpacity style={styles.btnVoltar} onPress={() => this.fechar(false)}>
                                            <Text style={styles.sinopse}>Voltar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    titulo: {
        fontSize: 20,
        padding: 15,
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    areaBtn: {
        alignItems: 'flex-start',
        marginTop: -35,
        zIndex: 9
    },
    btnSinopse: {
        width: 100,
        backgroundColor: '#26ac30',
        opacity: 1,
        padding: 8,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    areaModal: {
        alignItems: 'center',
    },
    btnVoltar: {
        width: 200,
        backgroundColor: '#26ac30',
        opacity: 1,
        padding: 8,
        borderRadius: 10
    },
    sinopse: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modal: {
        flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
    },
    sizeModal: {
        backgroundColor: '#f0f0f0',
        width: '100%', 
        height: 300,
        shadowColor: '#000',
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10
    },
    sinopseModal: {
        color: '#000000', 
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,  
        marginTop: 20,
        marginBottom: 18
    },
    tituloFilme: {
        color: '#000000', 
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    }
})

export default Filmes
