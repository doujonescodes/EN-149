import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import UserProfileModal from './components/UserProfileModal';
import { useState } from 'react'

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View>
        <TouchableOpacity
        onPress= {()=> setModalVisible(true)}
        >
            <EvilIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
        <UserProfileModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
    )
}

export default Home