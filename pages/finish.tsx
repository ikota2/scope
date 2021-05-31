import { Header } from "../components/Header"
import { Picture } from "../components/Picture"
import { MainDiv } from "../components/MainDiv"
import { Title } from "../components/Title"

const Finish = () => {
  return (
    <>
      <Header />
      <MainDiv flexDirection={'column'}>
        <Picture />
        <Title size={'64px'} color={'#2c3172'}>Отличная работа!</Title>
      </MainDiv>
    </>
  )
}

export default Finish;
