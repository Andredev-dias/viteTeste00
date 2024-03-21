import InputMask from 'react-input-mask'; 
import Menu from './components/Menu';

export const TesteInputs = () => {
    return(
        <>
        <Menu/>
        <br />
        <label htmlFor="telTeste">Telefone</label>
            <InputMask mask="(99)99999-9999" type="text" placeholder="Digite um telefone" id='telTeste'/>
            <br />
        <label htmlFor="dataTeste">Data</label>
            <InputMask mask="99/99/99" type="text" placeholder="Digite uma data" id='dataTeste'/>

        </>
    )
}