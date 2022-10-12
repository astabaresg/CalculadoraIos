/**
 * Estilos globales de la aplicación
 */

import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({

    fondo:{
        flex:1,
        backgroundColor:'#000B0D',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoAnterior:{
        color:'rgba(255,255,255,0.6)',
        fontSize:30,
        textAlign:'right'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    // boton:{
    //     height:80,
    //     width:80,
    //     backgroundColor:'#9B9B9B',
    //     borderRadius:100,
    //     justifyContent:'center',
    // },
    // botonTexto:{
    //     textAlign:'center',
    //     padding:10,
    //     fontSize:30,
    //     color:'#000B0D',
    //     fontWeight:'bold'
    // }

});