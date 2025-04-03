import * as Styled from "./style";
import photo from "../../../assets/links/photoTiago.png";
import banner1 from "../../../assets/links/banner 1.png";
import banner2 from "../../../assets/links/banner 2.png";
import banner3 from "../../../assets/links/banner 3.png";
export default function MainPart() {
  const card = [
    {
      id: 1,
      link: "https://wa.me/5511996865057?text=Oi%2C+conheci+a+Agência+Toka+e+quero+saber+mais+sobre+a+assessoria+em+growth+e+vendas+pra+potencializar+minha+empresa.",
      img: banner1,
      description: "Assesoria especializada em Growth Marketing e Vendas",
    },
    // {
    //   id: 2,
    //   link: "https://wa.me/5511956829886?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20sob%20medida%20para%20ter%20um%20time%20estrat%C3%A9gico%20exclusivo%20para%20meu%20crescimento.%20Como%20funciona%20o%20processo?",
    //   img: banner2,
    //   description: "Consultoria Sob Medida (Time Exclusivo)",
    // },
    {
      id: 3,
      link: "https://wa.me/5511996865057?text=Olá%2C+vi+sua+consultoria+e+quero+entender+como+você+pode+me+ajudar+a+identificar+os+gargalos+que+estão+travando+o+crescimento+da+minha+empresa.",
      img: banner3,
      description: "Consultoria para empresarios",
    },
  ];

  return (
    <Styled.Container>
      {/* <div className="leftSide">
        <img src={photo} alt="Photo" />
      </div> */}
      <div className="rightSide col">
        <div className="tittleNameContainer col">
          <h1> Tiago Almeida Santos</h1>
          <hr />
          <p> Growth Marketing e Vendas</p>
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
