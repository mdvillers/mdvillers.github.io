import styled from 'styled-components'

export const ExperienceWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  color: var(--text-color);
  gap: 2rem;
  padding: 2.5rem 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const WorkWrapper = styled.div`
  flex: 2;
  width: 100%;
  h1{
    font-weight: 600;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px var(--border-color);
  }
  .experience-stepper {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
    background: var(--surface-color);
    box-shadow: 0 8px 20px var(--shadow-color);
  }
`
export const EdWrapper = styled.div`
  flex:1;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  background: var(--surface-color);
  box-shadow: 0 8px 20px var(--shadow-color);
  h1{
    font-weight: 600;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px var(--border-color);
  }
`
export const EdContent = styled.div`
  font-weight: 400;
  margin-bottom: 0;
  p {
    color: var(--muted-text-color);
    margin-bottom: 0.5rem;
  }
`
export const Stepper = styled.div`
  padding-left: 24px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 10px;
  }
`
export const StepperHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    margin: 2px;
    font-weight: 600;
  }
  a{
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
  }
  p {
    color: var(--muted-text-color);
    margin: 0.3rem 0 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const LogoLink = styled.a`
  display: block;
  img{
    padding: 2%;
    display: flex;
  }
`
export const StepperDesc = styled.div`
  max-width: 80%;
  color: var(--muted-text-color);
  margin-top: 0.5rem;
  p{
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  li{
    font-size: 16px;
    font-weight: 400;
    margin: 5px;
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
`
