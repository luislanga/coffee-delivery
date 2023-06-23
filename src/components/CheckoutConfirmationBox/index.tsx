import { ItemCard } from "../ItemCard";
import { ConfirmButton, Container, PaymentInfo } from "./styles";

export function CheckoutConfirmationBox() {
    return(
        <Container>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <PaymentInfo>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
                <span>Entrega</span>
                <span>R$ 3,50</span>
                <p>Total</p>
                <p>R$ 33,20</p>
            </PaymentInfo>
                <ConfirmButton>Confirmar pedido</ConfirmButton>
        </Container>
    )
}