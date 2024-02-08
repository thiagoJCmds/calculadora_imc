import { useState , useRef } from "react";
import InputMask from 'react-input-mask'
import { Titulo, Descricao, Botao, Paragrafo, Box } from "./Styles.Jsx";

function Form () {
    
    
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [cal, setCal] = useState();
    const clear = useRef("")
    const limpa = useRef("")
 
    
    function calcularImc () {
        const al = Math.pow(altura, 2);
        setCal(peso / al);
       
    }   
    
        const resultado = () => {

            if (cal <= 18){
                return (
                    // eslint-disable-next-line react/no-unknown-property
                    <Paragrafo cor="rgb(160, 27, 27)">abaixo do peso</Paragrafo>
                );
            }
            else if (cal <= 25){
                return(
                <Paragrafo cor="rgb(20, 20, 146)">peso normal</Paragrafo>
                );
            }
            else if (cal <= 30){
                return( <Paragrafo cor="rgb(219, 219, 53)">Sobrepeso</Paragrafo>
                
                );
            }   
            else if (cal){
                return (
                    <Paragrafo cor="rgb(160, 27, 27)">Obesidade</Paragrafo>
                )
            }
          
             
        }

        const reset = ()=>{
            clear.current.value = ""
            limpa.current.value = ""
            setCal()
          
        }

        const stopReload = (e)=> {
            e.preventDefault()

        }
    
    

    return (
       
          <Box>
            <form onSubmit={stopReload}>
            <Titulo>Calcule o indice de massa corporal</Titulo>
                <Descricao  htmlFor="altura">Altura</Descricao>
                <Box>
                <InputMask mask="9.99" placeholder="Exemplo 1.70" ref={clear} type="text" onChange={(evento) => setAltura(evento.target.value)}/>
                </Box>
                <Descricao htmlFor="peso">Peso</Descricao>
                <Box>
                <InputMask mask="99" placeholder="Exemplo 80" ref={limpa} type="text" onChange={(evento) => setPeso(evento.target.value)}/>
                </Box>
                <Box top="30px">
                <Botao margin="10px" onClick={calcularImc} type="button">Caucular IMC</Botao>
                <Botao onClick={reset} type="button">Limpar</Botao>
                </Box>
                <Box>
                {resultado()}    
                </Box>     
            </form>
            </Box>
    

    );


}  

export default Form