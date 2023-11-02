import {
  BgHeaderFooter,
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
  Btns,
  ButtonSave,
  ButtonDelete,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderAdm } from "../../components/HeaderAdm";
import UploadSimple from "../../assets/uploadSimple.svg";
import { AddFoodTag } from "../../components/AddFoodTag";

export function AdmEditFood() {
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
          <h3>Editar Prato</h3>
          <Section1>
            <ImportFileDiv>
              <label htmlFor="ImgEdit">
                <p>Imagem do prato</p>
                <div>
                  <img src={UploadSimple} alt="" />
                  <span>Selecione imagem para alterá-la</span>
                </div>
              </label>
              <input type="file" id="ImgEdit" />
            </ImportFileDiv>

            <InputControler>
              <label htmlFor="nomeEditFood">Nome</label>
              <input
                type="text"
                placeholder="Nome do prato"
                id="nomeEditFood"
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
              <label htmlFor="valorEditFood">Preço</label>
              <input type="number" placeholder="R$40,00" id="valorEditFood" />
            </InputControler>
          </Section2>

          <Description>
            <label htmlFor="">Descrição</label>
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </Description>

          <Btns>
            <ButtonDelete>
              <p>Salvar alterações</p>
            </ButtonDelete>
            <ButtonSave>
              <p>Salvar alterações</p>
            </ButtonSave>
          </Btns>
        </FormFood>
      </Main>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
