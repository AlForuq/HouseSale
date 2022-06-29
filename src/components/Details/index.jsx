import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  AgreeMent,
  CardWrapper,
  Container,
  Description,
  DetailWrapper,
  Form,
  GridPic,
  IconRadius,
  Info,
  Price,
  Properties,
  TextArea,
  User,
  Section,
  Address,
  Wrapper,
} from "./style";
import Main from "../../assets/images/main.png";
import One from "../../assets/images/one.png";
import Two from "../../assets/images/two.png";
import Three from "../../assets/images/three.png";
import Four from "../../assets/images/four.png";
import user from "../../assets/images/avatar1.png";
import { Button, Checkbox, Input } from "../Generics";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { TourDate } from "./TourDate";
const { REACT_APP_GoogleApiKey: key } = process.env;
const { REACT_APP_BASE_URL: url } = process.env;

export const Details = () => {
  const { id } = useParams();
  const [map, setMap] = useState(null);
  // const [data, setData] = useState(body);
  console.log(id);

  // const { data } = useQuery(
  //   "gethouse by id",
  //   () =>
  //     fetch(`${url}/api/v1/houses/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }).then((res) => res.json()),
  //   {
  //     onSuccess: (res) => {
  //       console.log(res, "resDETAIL");
  //     },
  //     refetchOnWindowFocus: false,
  //     keepPreviousData: true,
  //   }
  // );

  // console.log(data, 'dataDeatail')

  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const onUnMount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const { isLoaded } = useJsApiLoader({
    id: "edit-house",
    googleMapsApiKey: key,
  });

  const onMapClick = (e) => {
    console.log(e?.latLng?.lat(), "lat");
    console.log(e?.latLng?.lng(), "lat");
    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };

  return (
    <div className="center">
      <Container>
        <GridPic>
          <GridPic.Main>
            <img width={"100%"} height={"100%"} src={Main} />
          </GridPic.Main>
          <GridPic.One>
            <img width={"100%"} height={"100%"} src={One} />
          </GridPic.One>
          <GridPic.Two>
            <img width={"100%"} height={"100%"} src={Two} />
          </GridPic.Two>
          <GridPic.Three>
            <img width={"100%"} height={"100%"} src={Three} />
          </GridPic.Three>
          <GridPic.Four>
            <img width={"100%"} height={"100%"} src={Four} />
          </GridPic.Four>
        </GridPic>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
          }}
        >
          <div style={{ width: "74%" }}>
            <CardWrapper>
              <DetailWrapper>
                <Info>
                  <Info.Title>Luxury Family Loft by Victoria Park</Info.Title>
                  <Info.Text>Quincy St, Brooklyn, NY, USA</Info.Text>
                </Info>

                <Properties>
                  <Properties.Wrapper>
                    <Properties.Bed />
                    <Info.Text>Beds</Info.Text>
                  </Properties.Wrapper>

                  <Properties.Wrapper>
                    <Properties.Bath />
                    <Info.Text>Baths</Info.Text>
                  </Properties.Wrapper>

                  <Properties.Wrapper>
                    <Properties.Garage />
                    <Info.Text>Garage</Info.Text>
                  </Properties.Wrapper>

                  <Properties.Wrapper>
                    <Properties.Ruler />
                    <Info.Text>Ruler</Info.Text>
                  </Properties.Wrapper>

                  <Properties.Wrapper>
                    <Properties.Year />
                    <Info.Text>Year Built: 1800</Info.Text>
                  </Properties.Wrapper>
                </Properties>
              </DetailWrapper>

              <Price>
                <Properties>
                  <Properties.Wrapper>
                    <IconRadius>
                      <Properties.Share />
                    </IconRadius>
                    <Info.Text>Share</Info.Text>
                  </Properties.Wrapper>

                  <Properties.Wrapper>
                    <IconRadius>
                      <Properties.Love />
                    </IconRadius>
                    <Info.Text>Save</Info.Text>
                  </Properties.Wrapper>
                </Properties>

                <Price.Wrapper>
                  <Price.Origin>$2,800/m</Price.Origin>
                  <Price.Now>$7,500/m</Price.Now>
                </Price.Wrapper>

                <Info.Text flex={"flex-end"} mt={"4px"}>
                  Est.Mortgage
                </Info.Text>
              </Price>
            </CardWrapper>

            <Description>
              <div style={{ marginBottom: "12px" }} className="subTitle">
                Description
              </div>
              Character can help sell a home. Is there a fireplace in the master
              bedroom? Or maybe an original stained glass window in the
              entryway? At the very least, it will help potential buyers
              differentiate your listing from the other dozen they are browsing.
              Mention a few one-of-a-kind home features in your real estate
              listing description and the right buyers will appreciate it. It
              may end up being what makes a potential buyer schedule a showing.
              Character can help sell a home. Is there a fireplace in the master
              bedroom? Or maybe an original stained glass window in the
              entryway? At the very least, it will help potential buyers
              differentiate your listing from the other dozen they are browsing.
              Mention a few one-of-a-kind home features in your real estate
              listing description and the right buyers will appreciate it. It
              may end up being what makes a potential buyer schedule a showing.
            </Description>
          </div>

          <Form>
            <User>
              <User.Image src={user} />
              <User.Contact>
                <User.Name>Muhammadamin</User.Name>
                <User.Phone>+998 94 996 76 50</User.Phone>
              </User.Contact>
            </User>

            <Input
              pl={"4px"}
              borderr={"open"}
              placeholder={"Name"}
              height={"27px"}
            />
            <Input
              pl={"4px"}
              borderr={"open"}
              placeholder={"Phone"}
              height={"27px"}
            />
            <Input
              pl={"4px"}
              borderr={"open"}
              placeholder={"Email"}
              height={"27px"}
            />

            <TextArea />
            <AgreeMent>
              <Checkbox />
              <AgreeMent>
                By submitting this form I agree to Terms of Use
              </AgreeMent>
            </AgreeMent>
            <Button type={"primary"}>Send Request</Button>
          </Form>
        </div>

        <Section>
          <div className="subTitle">Location</div>
          <Wrapper>
            <Address.Wrapper>
              <Address>
                <Wrapper.Title>Address:</Wrapper.Title>
                <Info.Text>329 Queensberry Street</Info.Text>
              </Address>

              <Address>
                <Wrapper.Title>State/Country:</Wrapper.Title>
                <Info.Text>Washington</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <Wrapper.Title>City:</Wrapper.Title>
                <Info.Text>Jersey City</Info.Text>
              </Address>

              <Address>
                <Wrapper.Title>Zip:</Wrapper.Title>
                <Info.Text>365448</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <Wrapper.Title>Area:</Wrapper.Title>
                <Info.Text>Greenville</Info.Text>
              </Address>

              <Address>
                <Wrapper.Title>Country:</Wrapper.Title>
                <Info.Text>United States</Info.Text>
              </Address>
            </Address.Wrapper>
          </Wrapper>

          <Wrapper>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnMount={onUnMount}
                onClick={onMapClick}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </Wrapper>
        </Section>

        <Section>
          <div className="subTitle">Property Details</div>
          <Wrapper>
            <Address.Wrapper>
              <Address>
                <Wrapper.Title>Property ID:</Wrapper.Title>
                <Info.Text>HZ27</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Price:</Wrapper.Title>
                <Info.Text>$130.000</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Property ID:</Wrapper.Title>
                <Info.Text>HZ27</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Property Size:</Wrapper.Title>
                <Info.Text>1560 Sq Ft</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <Wrapper.Title>Bedroom:</Wrapper.Title>
                <Info.Text>3</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Bathroom:</Wrapper.Title>
                <Info.Text>365448</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Garage:</Wrapper.Title>
                <Info.Text>4</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Garage size:</Wrapper.Title>
                <Info.Text>200 Sqft</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <Wrapper.Title>Property Type:</Wrapper.Title>
                <Info.Text>Apartment</Info.Text>
              </Address>
              <Address>
                <Wrapper.Title>Property Status:</Wrapper.Title>
                <Info.Text>For Sale</Info.Text>
              </Address>
            </Address.Wrapper>
          </Wrapper>
        </Section>

        <Section>
          <div className="subTitle">Features</div>
          <Wrapper>
            <Address.Wrapper>
              <Address>
                <IconRadius>
                  <Properties.Air />
                </IconRadius>
                <Info.Text>Air Conditioning</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.bar />
                </IconRadius>
                <Info.Text>Barbeque</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.blinds />
                </IconRadius>
                <Info.Text>Window Coverings</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.chair />
                </IconRadius>
                <Info.Text>Dining Room</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <IconRadius>
                  <Properties.Dryer />
                </IconRadius>
                <Info.Text>Dryer</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.grass />
                </IconRadius>
                <Info.Text>Lawn</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.gym />
                </IconRadius>
                <Info.Text>Gym</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.laundry />
                </IconRadius>
                <Info.Text>Laundry</Info.Text>
              </Address>
            </Address.Wrapper>

            <Address.Wrapper>
              <Address>
                <IconRadius>
                  <Properties.liquid />
                </IconRadius>
                <Info.Text>Washer</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.microwave />
                </IconRadius>
                <Info.Text>Microwave</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.outdoor />
                </IconRadius>
                <Info.Text>Outdoor Shower</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.refrigerator />
                </IconRadius>
                <Info.Text>Refrigerator</Info.Text>
              </Address>
            </Address.Wrapper>
            <Address.Wrapper>
              <Address>
                <IconRadius>
                  <Properties.sauna />
                </IconRadius>
                <Info.Text>Sauna</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.swimmer />
                </IconRadius>
                <Info.Text>Swimming pool</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.TVcable />
                </IconRadius>
                <Info.Text>TV Cable</Info.Text>
              </Address>
              <Address>
                <IconRadius>
                  <Properties.wifi />
                </IconRadius>
                <Info.Text>WiFi</Info.Text>
              </Address>
            </Address.Wrapper>
          </Wrapper>
        </Section>
        <TourDate/>
      </Container>
    </div>
  );
};
