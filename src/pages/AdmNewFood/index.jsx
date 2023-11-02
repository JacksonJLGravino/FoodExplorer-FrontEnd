import {
  BgHeaderFooter,
  Button,
  CategoryDiv,
  Container,
  Description,
  FormFood,
  GoBack,
  ImportFileDiv,
  IngredientsDiv,
  Main,
  InputControler,
  Section1,
  Section2,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderAdm } from "../../components/HeaderAdm";
import UploadSimple from "../../assets/uploadSimple.svg";
import { AddFoodTag } from "../../components/AddFoodTag";

export function AdmNewFood() {
  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm />
      </BgHeaderFooter>

      <Main>
        <GoBack href="/">
          <div></div>
          <p>Voltar</p>
        </GoBack>

        <FormFood>
          <h3>Novo Prato</h3>
          <Section1>
            <ImportFileDiv>
              <label htmlFor="ImgSend">
                <p>Imagem do prato</p>
                <div>
                  <img src={UploadSimple} alt="" />
                  <span>Selecione imagem</span>
                </div>
              </label>
              <input type="file" id="ImgSend" />
            </ImportFileDiv>

            <InputControler>
              <label htmlFor="nomeFood">Nome</label>
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                id="nomeFood"
              />
            </InputControler>

            <CategoryDiv>
              <label htmlFor="">Categoria</label>
              <select>
                <option>Refeição</option>
                <option>Sobremesa</option>
                <option>Bebida</option>
              </select>
            </CategoryDiv>
          </Section1>

          <Section2>
            <IngredientsDiv>
              <h6>Ingredientes</h6>
              <div>
                <AddFoodTag value="teste 123" />

                <AddFoodTag placeholder="teste 321" isNew={true} />
              </div>
            </IngredientsDiv>

            <InputControler>
              <label htmlFor="valorFood">Preço</label>
              <input type="number" placeholder="R$00,00" id="valorFood" />
            </InputControler>
          </Section2>

          <Description>
            <label htmlFor="">Descrição</label>
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </Description>

          <Button>
            <p>Salvar alterações</p>
          </Button>
        </FormFood>
      </Main>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
