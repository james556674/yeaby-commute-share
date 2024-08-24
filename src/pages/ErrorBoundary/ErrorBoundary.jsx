import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRoadBarrier } from "@fortawesome/free-solid-svg-icons"

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
`

const ErrorBoundary = () => {
  return (
    <MainContainer>
      <div className="wip-container">
        {/* page is still working */}
        <FontAwesomeIcon icon={faRoadBarrier} />
        <h1>Work in Progress</h1>
        <p>Page is still working</p>
      </div>
    </MainContainer>
  )
}

export default ErrorBoundary;