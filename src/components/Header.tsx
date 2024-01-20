import styled from "styled-components";
import { RedeSocial } from "./RedeSocial";
import instagramIcone from "../assets/instagram.png";
import whatsIcone from "../assets/whats.png";
import linkedinIcone from "../assets/linkedin.png";

const HeaderStyled = styled.div`
    background-color: #1e5eff;
    padding: 8px 12px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export function Header() {
    return (
        <HeaderStyled>
            <div>
                <h1>Daphne Pet Shop</h1>
            </div>

            <div>
                <RedeSocial
                    link="https://www.instagram.com/petdapheoficial/"
                    icone={instagramIcone}
                    nome="@petdaphneoficial"
                />

                <RedeSocial link="tel:+5555998979695" icone={whatsIcone} nome="WhatsApp" />

                <RedeSocial link="https://www.linkedin.com/in/daphne-klann" icone={linkedinIcone} nome="LinkedIn" />
            </div>
        </HeaderStyled>
    );
}
