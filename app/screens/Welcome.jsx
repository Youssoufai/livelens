import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <GestureRecognizer
            onSwipeLeft={() => navigation.navigate('Features')}
            style={styles.container}
        >
            {/* Background Image */}
            <Image
                source={require('@/assets/images/Map.png')}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Get live updates from anywhere in the world</Text>
                <Text style={styles.description}>
                    Need a real-time look at a place? Just drop a request, and a nearby Spotter
                    will send live photos or videos straight to you.
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
                    onPress={() => navigation.navigate('Features')}
                >
                    <Text style={styles.buttonText}>Next</Text>
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
        bottom: 50,
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default WelcomeScreen;
