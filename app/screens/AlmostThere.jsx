import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AlmostThere = ({ navigation }) => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('User_329fjfsljm3')

    const handleFinishSetup = () => {
        navigation.navigate('LastScreen') // Update with your actual route
    }

    return (
        <View style={styles.container}>
            {/* Top Image */}
            <View style={styles.imageWrapper}>
                <Image source={require('@/assets/images/front-camera.png')} style={styles.image} />
            </View>

            {/* Heading */}
            <Text style={styles.title}>Almost there! Set up your profile</Text>
            <Text style={styles.description}>
                Your identity stays private, but your experience gets better when you personalize it!
            </Text>

            {/* Full Name Input */}
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Full name</Text>
                <View style={styles.inputWithIcon}>
                    <Image
                        source={require('@/assets/images/icon-user.png')} // use your full name icon here
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        value={fullName}
                        onChangeText={setFullName}
                        placeholderTextColor="#999"
                    />
                </View>
            </View>

            {/* Username Input */}
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Username (Optional)</Text>
                <View style={styles.inputWithIcon}>
                    <Image
                        source={require('@/assets/images/icon-at.png')} // use your username icon here
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="User_329fjfsljm3"
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#999"
                    />
                </View>
            </View>

            {/* Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: fullName.trim() ? '#000' : '#ddd' }]}
                onPress={handleFinishSetup}
            >
                <Text style={styles.buttonText}>Finish setup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlmostThere

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 24,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#111',
    },
    description: {
        fontSize: 14,
        color: '#444',
        marginBottom: 30,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        color: '#222',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#999', // Optional: applies color overlay
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    button: {
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
})
