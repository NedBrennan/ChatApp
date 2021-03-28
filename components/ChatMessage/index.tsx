import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Message } from '../../types'
import moment from 'moment'
import styles from '../ChatListItem/style'


export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props
    return (
        <View style={styles.container}>
            <View style={styles.messageBox}>
            <Text style={styles.username}>{message.user.name}</Text>
            <Text>{moment(message.createdAt).fromNow()}</Text>
            <Text>{message.content}</Text>
            </View>
        </View>
    )
}

export default ChatMessage