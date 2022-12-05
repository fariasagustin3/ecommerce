import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement