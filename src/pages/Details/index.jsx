import {Container, Links, Content} from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button';

import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque libero rerum distinctio consectetur, laborum velit 
            sequi sunt rem doloremque placeat quae quibusdam et, sapiente
            saepe accusamus. Hic tenetur reiciendis inventore.
          </p>
          
          <Section title="Links úteis">
            <Links>
            <li><a href="#">https://rocketseat.com.br</a></li>  
            <li><a href="#">https://rocketseat.com.br</a></li>  
            </Links>  
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}