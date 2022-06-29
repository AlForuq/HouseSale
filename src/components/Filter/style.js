import styled from "styled-components";
// import { ReactComponent as price } from "../../assets/icons/price.svg";
import { ReactComponent as home } from "../../assets/icons/home-icon.svg";
// import { ReactComponent as key } from "../../assets/icons/car-key.svg";
import { ReactComponent as setting } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as search } from "../../assets/icons/search-icon.svg";

const Container = styled.div`
  display: flex;
  max-width: var(--width);
  width: 100%;
  padding: 0 130px;
  margin: 10px 0;
  gap: 20px;

`;

const Icon = styled.div`
  /* margin-right: 8px; */
`;
// Icon.Price = styled(price)`
//   margin-right: 8px;
// `;
Icon.Home = styled(home)`
  margin-right: 8px;
  margin-top: 6px;
`;
// Icon.Key = styled(key)`
//   margin-right: 8px;
// `;
Icon.Setting = styled(setting)`
  margin-right: 8px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;
const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  gap: 0 20px;
`;

export { Container, Icon, Advanced, Section };
