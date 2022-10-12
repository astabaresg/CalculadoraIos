import {useRef, useState} from 'react';

//Enumeración que permite manejar las operaciones
//permitidas por la calculadora
enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

/**
 * Custom Hook para el manejo de toda la lógica de la calculadora
 */
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>(); //Se maneja la última operación clickeada

  //Función para limpiar los inputs de numero y numeroAnterior
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  //Construye el input visual con respecto a los botones presionados
  const armarNumero = (numeroTexto: string) => {
    //No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //Evaluar si es otro 0 y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        //Evaluar si es diferente de 0 y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        //Evitar 000.0
      } else if (numeroTexto === '0' && numero.includes('0')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  //Función del botón 'del' de la calculadora
  const btnDelete = () => {
    let negativo = '';
    let numTemp = numero;

    //Si el número incluye el signo '-' es almacenado en una variable
    //auxiliar para poder hacer posteriormente la eliminación del último dígito
    //ya que si se intenta eliminar -1 debe cambiar a 0, no -0 o que quedara solo '-'
    if (numero.includes('-')) {
      negativo = '-';
      numTemp = numero.substring(1);
    }

    if (numTemp.length === 1) {
      setNumero('0');
    } else {
      setNumero(negativo + numTemp.slice(0, -1));
    }
  };

  //Función para convertir un valor positivo en negativo y viceversa
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ' '));
    } else {
      setNumero('-' + numero);
    }
  };

  //Función para guardar en 'numeroAnterior' el valor nuevo
  //una vez se realiza alguna operación

  const cambiarNumPorAnterior = () => {
    //Si el número termina en '.' se elimina este símbolo, ya que es innecesario
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  // Operación de dividir
  const btnDividir = () => {
    //Se cambia el número anterior por el actual al hacer click en la operación
    cambiarNumPorAnterior();
    //Se agrega la referencia a la operación
    ultimaOperacion.current = Operadores.dividir;
  };

  // Operación de multiplicar
  const btnMultiplicar = () => {
    //Se cambia el número anterior por el actual al hacer click en la operación
    cambiarNumPorAnterior();
    //Se agrega la referencia a la operación
    ultimaOperacion.current = Operadores.multiplicar;
  };

  // Operación de sumar
  const btnSumar = () => {
    //Se cambia el número anterior por el actual al hacer click en la operación
    cambiarNumPorAnterior();
    //Se agrega la referencia a la operación
    ultimaOperacion.current = Operadores.sumar;
  };

  // Operación de restar
  const btnRestar = () => {
    //Se cambia el número anterior por el actual al hacer click en la operación
    cambiarNumPorAnterior();
    //Se agrega la referencia a la operación
    ultimaOperacion.current = Operadores.restar;
  };

  //Calculo a realizar
  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  }
};
