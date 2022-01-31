import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';


export default function Picker(props){
    const Placeholder = {
        label: 'Selecione uma moeda ',
        value : null,
        color: '#000',
    }
    return(
        <RNPickerSelect 
         placeholder={Placeholder}
         items={props.moedas}
         onValueChange={(value) =>props.onChange(value)}           
         style={{
             inputAndroid:{
                 fontSize:32,
                 color: '#000',
             }
         }}  
         />
    );
}