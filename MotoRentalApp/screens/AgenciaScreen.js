import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const AgenciaScreen = () => {
    const [scrollAnim] = React.useState(new Animated.Value(0));

    const handlePressIn = () => {
        Animated.timing(scrollAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scrollAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const interpolatedScroll = scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '20deg'],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a Nuestra Agencia!</Text>
            <TouchableOpacity
                style={[styles.infoContainer, { transform: [{ rotate: interpolatedScroll }] }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.7}
            >
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.text}>Agencia XYZ</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.infoContainer, { transform: [{ rotate: interpolatedScroll }] }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.7}
            >
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.text}>Av. Principal 456, Ciudad ABC</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.infoContainer, { transform: [{ rotate: interpolatedScroll }] }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.7}
            >
                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.text}>987654321</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.infoContainer, { transform: [{ rotate: interpolatedScroll }] }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.7}
            >
                <Text style={styles.label}>Correo Electrónico:</Text>
                <Text style={styles.text}>info@agenciaxyz.com</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.infoContainer, { transform: [{ rotate: interpolatedScroll }] }]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.7}
            >
                <Text style={styles.label}>Horario de Atención:</Text>
                <Text style={styles.text}>Lunes a Viernes: 9am - 6pm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9', // Color de fondo suave
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Color del título más oscuro
        textDecorationLine: 'underline', // Subrayado
        textTransform: 'uppercase', // Convertir texto a mayúsculas
    },
    infoContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Color de la línea divisoria
        paddingBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555', // Color de las etiquetas más oscuro
    },
    text: {
        fontSize: 18,
        color: '#666', // Color del texto más oscuro
    },
});

export default AgenciaScreen;
