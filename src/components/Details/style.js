import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love 1.svg";
import { ReactComponent as resize } from "../../assets/icons/arrow-top-bottom.svg";
import { ReactComponent as share } from "../../assets/icons/Share.svg";
import { ReactComponent as year } from "../../assets/icons/Vector.svg";

import air  from "../../assets/svgs/air.png";
import { ReactComponent as bar } from "../../assets/svgs/bar.svg";
import { ReactComponent as blinds } from "../../assets/svgs/blinds.svg";
import { ReactComponent as chair } from "../../assets/svgs/chair.svg";
import { ReactComponent as Dryer } from "../../assets/svgs/dryer.svg";
import { ReactComponent as grass } from "../../assets/svgs/grass.svg";
import { ReactComponent as gym } from "../../assets/svgs/gym.svg";
import { ReactComponent as laundry } from "../../assets/svgs/laundry.svg";
import { ReactComponent as liquid } from "../../assets/svgs/liquid.svg";
import { ReactComponent as microwave } from "../../assets/svgs/microwave.svg";
import { ReactComponent as outdoor } from "../../assets/svgs/outdoor.svg";
import { ReactComponent as refrigerator } from "../../assets/svgs/refrigerator.svg";
import { ReactComponent as sauna } from "../../assets/svgs/sauna.svg";
import { ReactComponent as swimmer } from "../../assets/svgs/swimmer.svg";
import { ReactComponent as TVcable } from "../../assets/svgs/TVcable.svg";
import { ReactComponent as wifi } from "../../assets/svgs/wifi.svg";

export const Container = styled.div`
  width: 1440px;
  padding: 0 130px;
  /* padding-top: 24px;  */
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* =========GRID======== */

export const GridPic = styled.div`
  display: grid;
  width: 100%;
  height: 400px;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr 1fr;

  /* grid-template-rows: 200px 200px;
  grid-template-columns: 550px 250px 250px; */

  gap: 20px;
`;

GridPic.Main = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
  background-color: white;
  /* background-size: cover; */
`;

GridPic.One = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  background-color: white;
`;

GridPic.Two = styled.div`
  grid-row: 1/2;
  grid-column: 3/4;
  background-color: white;
`;

GridPic.Three = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: white;
`;

GridPic.Four = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;
  background-color: white;
`;

/* ===========CardDetail============= */

export const CardWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-bottom: 24px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

Info.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Info.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;

  margin-top: ${({ mt }) => mt};

  display: flex;
  justify-content: ${({ flex }) => flex};
`;

export const Properties = styled.div`
  display: flex;
  gap: 24px;
`;

Properties.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

Properties.Bed = styled(bed)``;
Properties.Bath = styled(bath)``;
Properties.Garage = styled(garage)``;
Properties.Ruler = styled(ruler)``;
Properties.Year = styled(year)``;

Properties.Share = styled(share)``;

Properties.Love = styled(love)``;

export const Price = styled.div``;

Price.Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  align-items: center;
  margin-top: 25px;
  box-sizing: border-box;
`;

Price.Origin = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;

Price.Now = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
`;

export const IconRadius = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  :hover {
    cursor: pointer;
  }
  background: #f6f8f9;
  :active {
    transform: scale(0.95);
    & path {
      fill: red;
      background-color: red;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 224px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 263px;
  padding: 24px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export const User = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

User.Image = styled.img`
  width: 52px;
  height: 52px;
`;

User.Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

User.Name = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

User.Phone = styled.a`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #696969;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #0d263b;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
`;

export const AgreeMent = styled.div`
  display: flex;
  gap: 8px;
`;

AgreeMent.Text = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: fit-content;
  background: #ffffff;
  border-top: 1px solid #e6e9ec;
  gap: 30px;
  padding: 48px 30px 48px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

Address.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

Wrapper.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

Properties.Air = styled.img.attrs({
  src: `${air}`
})``;

Properties.bar = styled(bar)``;
Properties.blinds = styled(blinds)``;
Properties.chair = styled(chair)``;
Properties.Dryer = styled(Dryer)``;
Properties.grass = styled(grass)``;
Properties.gym = styled(gym)``;
Properties.laundry = styled(laundry)``;
Properties.liquid = styled(liquid)``;
Properties.microwave = styled(microwave)``;
Properties.outdoor = styled(outdoor)``;
Properties.refrigerator = styled(refrigerator)``;
Properties.sauna = styled(sauna)``;
Properties.swimmer = styled(swimmer)``;
Properties.TVcable = styled(TVcable)``;
Properties.wifi = styled(wifi)``;





