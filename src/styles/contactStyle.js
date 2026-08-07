import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 4rem auto;
  @media (max-width: 700px) {
    margin: 3rem auto;
  }
`;
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color: var(--text-color);
  margin-bottom: 2rem;
  font-weight: 600;
`;
export const ContactDetails = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  h3 {
    font-size: 1.4rem;
    color: var(--accent-color);
    font-weight: 600;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const ContactBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-weight: 400;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  background: var(--surface-color);
  box-shadow: 0 8px 20px var(--shadow-color);
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
