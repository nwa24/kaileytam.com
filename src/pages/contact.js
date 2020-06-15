import React from "react"
import Navbar from "../components/navbar/Navbar"
import styled from "styled-components"

const DescriptionHeader = styled.h1`
  font-family: "Montserrat Medium";
  color: #2c422f;
`

const DescriptionText = styled.p`
  font-family: "Avenir Light";
  font-size: 18px;
`

const ImagePlaceholder = styled.div`
  background-color: #97af97;
  padding: 300px;
  position: absolute;
  left: 2.4vw;
  margin-top: 100px;
`

const Description = styled.div`
  position: absolute;
  left: 45vw;
  margin-top: 100px;
  right: 2.4vw;
`

const contact = () => {
  return (
    <>
      <Navbar />
      <ImagePlaceholder />
      <Description>
        <DescriptionHeader>Hi friends,</DescriptionHeader>
        <DescriptionText>
          Lorem ipsum dolor sit amet, ea alia laudem ornatus pri, menandri
          reformidans his ex, mazim singulis ut mea. Mea illud lucilius phaedrum
          id. Et appellantur mediocritatem mea, ex vel graece minimum propriae,
          eligendi elaboraret in qui. Id eam integre persius utroque, sonet
          vivendo ea mea. Cu nec bonorum denique tractatos. Mei quod amet possim
          ne, in sea sale omnium. Sea te purto utroque dolorem, in utinam
          accusata nam, enim ponderum scribentur et qui. Eu sed aliquip ancillae
          consetetur, virtute ullamcorper sit ea. Vis ea mutat dicat quodsi, sed
          vocent officiis assentior te. No malis augue cum, usu ea aeque
          legendos incorrupte. Ad suas animal usu, usu malis iusto invenire cu.
          Ex malis electram dissentiet est. Id dicant eleifend per, illum noster
          et sed. Nec harum tincidunt ad, sed an eros volumus pertinax. Amet
          sententiae assueverit mea te, vis clita dicunt efficiendi at. Ea his
          cibo principes. Ut soluta legendos his, cu deserunt suavitate sit.
          Elit nihil ocurreret ei eos, eos offendit persequeris id. Et sed quem
          habeo inimicus, case nominati vituperatoribus ex mea. Et pro dico
          ubique ridens, nec ei omnis posidonium, ius vocibus reformidans ei.
          Nostrud docendi eloquentiam eum ea. Porro quando hendrerit mel cu,
          audiam singulis est id. Mutat liber te pri. Vel ex fugit bonorum
          scripserit, aperiri tacimates deseruisse ei vel. Eum augue
          signiferumque ei, at vim adhuc omnesque nominavi. Putent noster latine
          vel cu, quando mentitum disputando mel an, vel cu menandri vulputate.
          Ei vim nostrum legendos adipisci, mel amet disputando interpretaris
          an.
        </DescriptionText>
      </Description>
    </>
  )
}

export default contact
