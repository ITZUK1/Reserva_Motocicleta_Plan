import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    datosMotocicleta: ''
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleSubmit = () => {
    const camposVacios = Object.values(formData).some(value => value === '');
    if (camposVacios) {
      Alert.alert(
        'Error',
        'Por favor, complete todos los campos.',
        [{ text: 'OK', style: 'cancel' }],
        { cancelable: true }
      );
    } else {
      console.log(formData);
      Alert.alert(
        'Éxito',
        'Los datos se guardaron correctamente.',
        [{ text: 'OK', onPress: () => handleSuccess() }],
        { cancelable: true }
      );
    }
  };

  const handleSuccess = () => {
    setFormData({
      dni: '',
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      direccion: '',
      ciudad: '',
      telefono: '',
      datosMotocicleta: ''
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>DNI:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.dni} 
        onChangeText={(text) => handleChange('dni', text)} 
      />
      
      <Text style={styles.label}>Nombre:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.nombre} 
        onChangeText={(text) => handleChange('nombre', text)} 
      />
      
      <Text style={styles.label}>Primer Apellido:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.primerApellido} 
        onChangeText={(text) => handleChange('primerApellido', text)} 
      />
      
      <Text style={styles.label}>Segundo Apellido:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.segundoApellido} 
        onChangeText={(text) => handleChange('segundoApellido', text)} 
      />
      
      <Text style={styles.label}>Dirección:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.direccion} 
        onChangeText={(text) => handleChange('direccion', text)} 
      />
      
      <Text style={styles.label}>Ciudad:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.ciudad} 
        onChangeText={(text) => handleChange('ciudad', text)} 
      />
      
      <Text style={styles.label}>Teléfono:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.telefono} 
        onChangeText={(text) => handleChange('telefono', text)} 
      />
      
      <Text style={styles.label}>Datos de la Motocicleta:</Text>
      <TextInput 
        style={styles.input} 
        value={formData.datosMotocicleta} 
        onChangeText={(text) => handleChange('datosMotocicleta', text)} 
      />
      
      <Button title="Registrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});

export default FormularioRegistro;
