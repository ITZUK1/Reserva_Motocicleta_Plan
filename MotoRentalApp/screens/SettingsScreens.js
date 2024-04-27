import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    DNI: '',
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

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="DNI"
        value={formData.DNI} 
        onChangeText={(text) => handleChange('DNI', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Nombre"
        value={formData.nombre} 
        onChangeText={(text) => handleChange('nombre', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Primer Apellido"
        value={formData.primerApellido} 
        onChangeText={(text) => handleChange('primerApellido', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Segundo Apellido"
        value={formData.segundoApellido} 
        onChangeText={(text) => handleChange('segundoApellido', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Dirección"
        value={formData.direccion} 
        onChangeText={(text) => handleChange('direccion', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Ciudad"
        value={formData.ciudad} 
        onChangeText={(text) => handleChange('ciudad', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Teléfono"
        value={formData.telefono} 
        onChangeText={(text) => handleChange('telefono', text)} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Datos de la Motocicleta"
        value={formData.datosMotocicleta} 
        onChangeText={(text) => handleChange('datosMotocicleta', text)} 
      />
      
      <Button title="Registrar" onPress={() => console.log(formData)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#ffffff'
  }
});

export default FormularioRegistro;
