import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
    const navigation = useNavigation();

    return (
        <GestureRecognizer
            onSwipeLeft={() => navigation.navigate('Features')}
            style={styles.container}
        >
            {/* Background Image */}
            <Image
                source={require('@/assets/images/people.png')}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Real people, real moments</Text>
                <Text style={styles.description}>
                    You're in control—no real names, no personal details shared. Every request and response stays anonymous.
                </Text>

                {/* Pagination Dots */}
                <View style={styles.pagination}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                {/* Next Button */}
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('PhoneNumber')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '60%',
    },
    contentContainer: {
        position: 'absolute',
        bottom: 70,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginTop: 10,
    },
    pagination: {
        flexDirection: 'row',
        marginTop: 15,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'red',
    },
    nextButton: {
        backgroundColor: 'red',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        width: '100%',
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        display: 'flex', // Ensure flexbox behavior
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default GetStartedScreen;
