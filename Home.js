import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import UserProfileModal from './components/UserProfileModal';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View>
      <Text>Home</Text>
        <TouchableOpacity>
            <EvilIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
        <UserProfileModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
    )
}

export default Home