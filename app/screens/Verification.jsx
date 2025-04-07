import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'

const Verification = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');

    const handleNext = () => {
        // Optionally validate phone here
        navigation.navigate('AlmostThere') // 👈 Replace with your route name
    }

    return (
        <View style={styles.container}>
            {/* Image */}
            <View style={styles.imageWrapper}>
                <Image
                    source={require('@/assets/images/phone-message.png')}
                    style={styles.image}
                />
            </View>

            {/* Heading */}
            <Text style={styles.title}>Verify your phone to proceed</Text>

            {/* Instruction */}
            <Text style={styles.subtitle}>
                We sent a 6-digit code to <Text style={styles.phoneNumber}>0900000000</Text>. Enter the code below to confirm the number
            </Text>

            {/* Input Section */}
            <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Enter verification code</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXX–XXX"
                    keyboardType="numeric"
                    value={code}
                    onChangeText={setCode}
                    maxLength={6}
                    placeholderTextColor="#999"
                />
                <TouchableOpacity>
                    <Text style={styles.linkText}>Wrong number? <Text style={styles.link}>Edit phone number</Text></Text>
                </TouchableOpacity>
            </View>

            {/* Resend */}
            <TouchableOpacity>
                <Text style={styles.resendText}>Didn’t receive code? <Text style={styles.link}>Resend code</Text></Text>
            </TouchableOpacity>

            {/* Verify Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: code.length === 6 ? '#000' : '#ddd' }]}
                /*  disabled={code.length !== 6} */
                onPress={handleNext}
            >
                <Text style={styles.buttonText}>Verify phone</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
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
        marginBottom: 8,
        color: '#111',
    },
    subtitle: {
        fontSize: 14,
        color: '#444',
        marginBottom: 24,
    },
    phoneNumber: {
        fontWeight: 'bold',
        color: '#000',
    },
    inputSection: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 8,
    },
    linkText: {
        fontSize: 13,
        color: '#444',
    },
    link: {
        fontWeight: 'bold',
        color: '#000',
    },
    resendText: {
        fontSize: 13,
        color: '#444',
        marginBottom: 30,
    },
    button: {
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
})
