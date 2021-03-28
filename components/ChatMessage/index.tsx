import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Message } from '../../types'


export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props
    return (
        <View>
            <Text>{message.content}</Text>
        </View>
    )
}

export default ChatMessage

const styles = StyleSheet.create({})
