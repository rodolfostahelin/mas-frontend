import {FiLogIn, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Background, Container, Content, FormContainer, InputContainer } from './styles'

export function Register(){
    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form action="">
                        <InputContainer>
                            <FiMail size={40} />
                            <input
                                type="text"
                                placeholder="Nome"
                            />
                        </InputContainer>
                        <InputContainer>
                            <FiMail size={40} />
                            <input
                                type="email"
                                placeholder="E-mail"
                            />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input
                                type="password"
                                placeholder="Senha"
                            />
                        </InputContainer>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}