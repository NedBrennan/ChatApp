import styles from './style'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ChatRoom } from '../../types'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}


const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props

    const user = chatRoom.users[0]
    console.log(user)

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri}} style={styles.avatar} />
            </View>
            <View style={styles.midContainer}>
                <Text>{user.name}</Text>
                <Text>{chatRoom.lastMessage.content}</Text>
            </View>

            <Text>{chatRoom.lastMessage.createdAt}</Text>
        </View>

    )
}

export default ChatListItem