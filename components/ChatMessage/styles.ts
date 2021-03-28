import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        backgroundColor: '#e5e5e5',
        marginRight: 50,
        borderRadius: 10,
        padding: 10,
    },
    username: {
        color: Colors.light.tint,
        marginBottom: 3
    },
    message: {
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontStyle: 'italic'
    }
})


export default styles