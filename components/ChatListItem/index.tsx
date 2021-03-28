import styles from './style'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ChatRoom } from '../../types'
import moment from 'moment'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}


const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props

    const user = chatRoom.users[1]
    console.log(user)

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri}} style={styles.avatar} />
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>

            <Text style={styles.date}>{moment.utc(chatRoom.lastMessage.createdAt).format('dddd')}</Text>
        </View>

    )
}

export default ChatListItem