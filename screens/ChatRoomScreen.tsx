import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/ChatMessage'
import chatRoomData from '../data/Chats'

const ChatRoomScreen =() => {

    const route = useRoute()
    console.log('hello')

    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
        />
    )
}

export default ChatRoomScreen