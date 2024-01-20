import styled from "styled-components";

const RedeSocialStyled = styled.a`
    color: #fff;
    margin-bottom: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        height: 20px;
        width: 20px;
        margin-right: 4px;
    }

    span {
        font-size: 12px;
    }
`;

interface RedeSocialProps {
    link: string;
    icone: string;
    nome: string;
}

export function RedeSocial(props: RedeSocialProps) {
    return (
        <RedeSocialStyled href={props.link}>
            <img src={props.icone} alt={props.nome} />
            <span>{props.nome}</span>
        </RedeSocialStyled>
    );
}
