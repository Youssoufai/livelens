import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/email-notification.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>Enable notifications?</Text>
                <Text style={styles.subtitle}>
                    Get alerts for new requests, responses, and rewards so you never miss out. You can change this anytime in settings.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.enableButton}>
                    <Text style={styles.enableButtonText}>Enable notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.laterButton}>
                    <Text style={styles.laterButtonText}>Maybe later</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 60,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 140,
        marginTop: 20,
    },
    textContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 12,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    enableButton: {
        backgroundColor: '#ff3b30',
        borderRadius: 30,
        paddingVertical: 16,
        width: '100%',
        marginBottom: 16,
    },
    enableButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    laterButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        paddingVertical: 16,
        width: '100%',
    },
    laterButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});
