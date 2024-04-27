import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const Homescreens = () => {
    const images = [
        require('./img/img-1.jpeg'),
        require('./img/img-2.png'),
        require('./img/img-3.webp'),
    ];

    const fadeInAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(
            fadeInAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeInAnim]);

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Animated.Text style={[styles.heading, { opacity: fadeInAnim }]}>¡Bienvenido a nuestra empresa de alquiler de motocicletas de competición!</Animated.Text>
            <Text style={styles.subHeading}>Reserva tu emoción hoy mismo</Text>
            <Text style={styles.text}>Aquí en nuestra empresa, te ofrecemos una experiencia única de alquiler de motocicletas de competición. Ya sea que seas un entusiasta experimentado o un novato emocionado, ¡tenemos la motocicleta perfecta para ti!</Text>
            <Text style={styles.text}>Nuestro equipo está listo para ayudarte a alcanzar nuevas alturas en el mundo de las carreras. ¿Qué estás esperando? ¡Haz tu reserva ahora mismo!</Text>
            
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
                {images.map((image, index) => (
                    <ImageBackground key={index} source={image} style={styles.image} imageStyle={styles.imageStyle} />
                ))}
            </ScrollView>

            <View style={styles.infoContainer}>
                <Text style={styles.infoHeading}>Nuestra Empresa</Text>
                <Text style={styles.infoText}>Somos una empresa líder en el alquiler de motocicletas de competición, con más de 10 años de experiencia en el mercado. Nuestro objetivo es proporcionar a nuestros clientes la mejor experiencia en carreras.</Text>
                <Text style={styles.infoHeading}>Servicios</Text>
                <Text style={styles.infoText}>- Alquiler de motocicletas de competición de última generación</Text>
                <Text style={styles.infoText}>- Entrega y recogida de motocicletas en todo el país</Text>
                <Text style={styles.infoText}>- Asesoramiento experto y entrenamiento para pilotos de todos los niveles</Text>
                <Text style={styles.infoHeading}>Sedes</Text>
                <Text style={styles.infoText}>- Sede Central: Av. Principal 123, Ciudad Principal</Text>
                <Text style={styles.infoText}>- Sede Norte: Calle Norte 456, Ciudad Norte</Text>
                <Text style={styles.infoText}>- Sede Sur: Calle Sur 789, Ciudad Sur</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#e6f7ff', // Color de fondo suave
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#004d99', // Color del título
    },
    subHeading: {
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom: 20,
        textAlign: 'center',
        color: '#3366ff', 
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
        color: '#666', 
    },
    imageContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        width: width,
        height: 200,
    },
    image: {
        width: width,
        height: '100%',
        resizeMode: 'cover',
    },
    imageStyle: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    infoContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 20,
    },
    infoHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333', // Color del título de la información
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555', // Color del texto de la información
    },
});

export default Homescreens;
