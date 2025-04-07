import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'

const PhoneNumber = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('')
    const handleNext = () => {
        // Optionally validate phone here
        navigation.navigate('Verification') // 👈 Replace with your route name
    }

    return (
        <View style={styles.container}>
            {/* Back Arrow */}
            <View style={styles.header}>
                <Image source={require('@/assets/images/arrow-left.png')} style={styles.backIcon} />
            </View>

            {/* Phone Illustration */}
            <View style={styles.imageWrapper}>
                <Image source={require('@/assets/images/camera-flash.png')} style={styles.image} />
            </View>

            {/* Title and Description */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>Enter your phone number to get started</Text>
                <Text style={styles.description}>
                    Enter your phone number to continue. We’ll send you a quick verification code—no spam, just security.
                </Text>
            </View>

            {/* Input with Icon */}
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Phone number</Text>
                <View style={styles.inputWithIcon}>
                    <Image
                        source={require('@/assets/images/device.png')} // <-- your phone icon
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter phone number"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                        placeholderTextColor="#999"
                    />
                </View>
            </View>

            {/* Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: phone ? '#000' : '#ddd' }]}

                onPress={handleNext} // 👈 Step 3: call handler
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

        </View>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 20,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    textContainer: {
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    inputWrapper: {
        marginBottom: 30,
    },
    label: {
        marginBottom: 8,
        fontSize: 14,
        color: '#333',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 12,
    },
    button: {
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
