import React, { useState } from 'react';
import { TextInput, Modal, StyleSheet, Text, Pressable, View, Button, Alert } from 'react-native';
import axios from 'axios'

const UserProfileModal = ({modalVisible, setModalVisible}) => {
    const [formState, setFormState] = useState({})
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <TextInput
             style={styles.input}
             onChangeText = {(newValue)=> {
                setFormState(
                    {username: newValue}
                )
             }} 
             value={formState.username}
            placeholder="Enter Username"
            />
            <TextInput
             style={styles.input}
             onChangeText = {(newValue)=> {
                setFormState(
                    {email: newValue}
                )
             }} 
             value={formState.email}
             placeholder="Enter Email"
            />
            <TextInput
             style={styles.input}
             onChangeText = {(newValue)=> {
                setFormState(
                    {bio: newValue}
                )
             }} 
             value={formState.bio}
             placeholder="Enter Biography"
            />
            <Button
            title = "Saved Profile"
            onPress = {() => {
            axios.post(
              "http://fakeendpoint.com",
              formState
            ).then((response)=> {
            if(
                response.data
            ){
                Alert.alert(
                    "Success", 
                    "User Profile successfully created"
                )
            }
            }).catch((error) => {
                Alert.alert(
                    "Error", 
                    error.message || "Unknown error had occurred"
                )
            })
            }} 
            ></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserProfileModal;
