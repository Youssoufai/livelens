import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const LastScreen = () => {
    const navigation = useNavigation();
    const handleFinishSetup = () => {
        navigation.navigate('Notifications') // Update with your actual route
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/confetti.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}>You're good to go!</Text>
                <Text style={styles.subtitle}>You can now enjoy all the features you need.</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleFinishSetup}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LastScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
    },
    content: {
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    button: {
        backgroundColor: '#ff3b30',
        paddingVertical: 16,
        paddingHorizontal: 100,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
