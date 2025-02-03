import * as Styled from "./style";
import photo from "../../../assets/links/photoTiago.png";
import banner1 from "../../../assets/links/banner 1.png";
import banner2 from "../../../assets/links/banner 2.png";
import banner3 from "../../../assets/links/banner 3.png";
export default function MainPart() {
  const card = [
    {
      id: 1,
      link: "https://wa.me/5511956829886?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20exclusiva%20para%20m%C3%A9dicos%20e%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20como%20atrair%20novos%20pacientes%20diariamente.%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?",
      img: banner1,
      description: "Consultoria Exclusiva para Médicos",
    },
    {
      id: 2,
      link: "https://wa.me/5511956829886?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20sob%20medida%20para%20ter%20um%20time%20estrat%C3%A9gico%20exclusivo%20para%20meu%20crescimento.%20Como%20funciona%20o%20processo?",
      img: banner2,
      description: "Consultoria Sob Medida (Time Exclusivo)",
    },
    {
      id: 3,
      link: "https://wa.me/5511956829886?text=Ol%C3%A1!%20Preciso%20de%20um%20suporte%20estrat%C3%A9gico%20para%20um%20projeto%20pontual.%20Poderia%20me%20explicar%20como%20funciona%20e%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis?",
      img: banner3,
      description: "Projetos Pontuais",
    },
  ];

  return (
    <Styled.Container>
      <div className="leftSide">
        <img src={photo} alt="Photo" />
      </div>
      <div className="rightSide col">
        <div className="tittleNameContainer col">
          <h1> Tiago Almeida Santos</h1>
          <hr />
          <p> Estrategista de Marketing e Crescimento</p>
        </div>
        <div className="cadsContainer col">
          {card.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <img src={item.img} alt={item.description} />
            </a>
          ))}
        </div>
      </div>
    </Styled.Container>
  );
}
