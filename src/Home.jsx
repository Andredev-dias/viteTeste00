import Graficos from "./components/Graficos"

export const Home = () => {
    return(
        <>
         <Graficos text="Grafico de linha" color="lightpink" whatChart='line'/>
         <Graficos text="Grafico de area" color="lightblue" whatChart='area'/>
         <Graficos text="Grafico de pizza" color="lightgrey" whatChart='pie'/>
         <Graficos text="Grafico de barra" color="lightgreen" whatChart='bar'/>
        </>
    )
}

