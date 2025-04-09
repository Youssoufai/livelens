import React, { useState } from 'react';
import {
    View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, ScrollView,
    Image
} from 'react-native';

const StyledModal = ({ visible, onClose, onCreateAccount }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            presentationStyle="formSheet"
        >
            <ScrollView contentContainerStyle={styles.modalWrapper}>
                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>

                {/* Branding and Header */}
                <Text style={styles.brandName}>🟥 Livelens</Text>
                <Text style={styles.modalTitle}>Get started</Text>
                <Text style={styles.modalSubtitle}>
                    Stay updated on what’s happening at the hottest spots in town!
                </Text>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.inputBox}>
                        <Image source={require('@/assets/images/tabler-icon-mail.png')} style={styles.inputImage} />
                        <TextInput
                            placeholder="e.g youremail@example.com"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.inputBox}>
                        <Image source={require('@/assets/images/tabler-icon-lock.png')} style={styles.inputImage} />
                        <TextInput
                            placeholder="Create a password"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <Text style={styles.passwordHint}>
                        Password must be more than 8 characters and contain an uppercase letter, a lowercase letter, a number and a special character.
                    </Text>
                </View>

                {/* Terms & Conditions */}
                <Text style={styles.termsText}>
                    By clicking <Text style={styles.link}>Create Account</Text>, you agree to our{' '}
                    <Text style={styles.link}>Terms and Conditions</Text> and confirm you have read our{' '}
                    <Text style={styles.link}>Privacy Policy</Text>.
                </Text>

                {/* Create Account Button */}
                <TouchableOpacity style={styles.createBtn} onPress={onCreateAccount}>
                    <Text style={styles.createBtnText}>Create account</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>OR</Text>

                {/* Continue with Google */}
                <TouchableOpacity style={styles.googleBtn}>
                    <Text style={styles.googleBtnText}>Continue with Google</Text>
                </TouchableOpacity>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalWrapper: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    closeButtonText: {
        fontSize: 24,
    },
    brandName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    modalSubtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 25,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#f9f9f9',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    passwordHint: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    termsText: {
        fontSize: 12,
        color: '#555',
        marginVertical: 15,
    },
    link: {
        color: 'red',
        textDecorationLine: 'underline',
    },
    createBtn: {
        backgroundColor: 'red',
        paddingVertical: 14,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
    },
    createBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    orText: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#888',
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        paddingVertical: 14,
        borderRadius: 50,
        alignItems: 'center',
    },
    googleBtnText: {
        color: '#000',
        fontSize: 16,
    },
});

export default StyledModal;
