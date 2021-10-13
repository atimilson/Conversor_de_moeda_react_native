import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';


export default function Picker(){
    const Placeholder = {
        label: 'Selecione uma moeda ',
        value : null,
        color: '#000',
    }
    return(
        <RNPickerSelect 
         placeholder={Placeholder}
         items={[
           {key: '1', label:'USD', value: 'USD'},
           {key: '2', label:'EUR', value: 'EUR'},
         ]}
         onValueChange={(value) =>{console.log(value);}}  
         style={{
             inputAndroid:{
                 fontSize:28,
                 color: '#000',
             }
         }}  
         />
    );
}