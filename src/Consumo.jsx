import { Card } from "./components/Card"
import Menu from "./components/Menu"

export const Consumo = () => {
    return(
        <div>
            <Menu/>
            <br />
            Consumo JSON
            <Card
             name="Lucas"
             desc="bem loko"
             value="10,00"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyNNZQxWyEGnS-niF1z76GmppYJEGvKGEhXDUCD_ZQg&s"
            />
        </div>
    )
}
