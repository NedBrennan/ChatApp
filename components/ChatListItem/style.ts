import { StyleSheet } from 'react-native'

let styles

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
        flexDirection: 'column',
        width: '55%',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5
    },
    avatar: {
        width: 60,
        height: 60,
        marginHorizontal: 10,
        borderRadius: 50
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 14,
        color: 'grey'
    },
    date: {
        width: '20%',
        marginRight: 5
    }
})