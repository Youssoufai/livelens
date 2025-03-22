import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

const FeaturesScreen = () => {
    const navigation = useNavigation();

    return (
        <GestureRecognizer
            onSwipeLeft={() => navigation.navigate('GetStarted')}
            onSwipeRight={() => navigation.navigate('Welcome')}
            style={styles.container}
        >
            {/* Background Image */}
            <Image
                source={require('@/assets/images/phone.png')}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Foreground Content */}
            <View style={styles.patch}>
                <Image
                    source={require('@/assets/images/screen.png')}
                    style={styles.screen}
                    resizeMode="cover"
                />

                {/* Content */}
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Capture. Share. Earn</Text>
                    <Text style={styles.description}>
                        See an active request near you? Snap a photo, record a video, or provide the info needed—and get rewarded instantly.
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
                        onPress={() => navigation.navigate('GetStarted')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
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
        height: '55%',
    },
    patch: {
        width: '100%',
        alignItems: 'center',
        marginTop: -50, // Adjust to move content up
    },
    screen: {

    },
    contentContainer: {
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
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
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FeaturesScreen;
