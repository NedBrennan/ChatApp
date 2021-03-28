import React from 'react';
import { Text, View, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import chatRoomData from '../data/Chats';
import BG from '../assets/images/BG.png'
import Input from '../components/InputComponent'

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log('hello');

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <Input />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
