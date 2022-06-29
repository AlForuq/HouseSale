import React, { useState } from "react";
import { Container, Section, Title, Wrapper } from "./style";
import { Input } from "../Generics";
import { Button } from "../Generics";
import { useMutation, useQuery } from "react-query";
import { useHttp } from "../../Hooks/useHttp";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Footer } from "../Footer";
const { REACT_APP_GoogleApiKey: key } = process.env;
// const { REACT_APP_BASE_URL: url } = process.env

const body = {
  address: "Mumbai",
  attachments: [
    {
      imgPath:
        "https://www.nabasoft.com/wp-content/uploads/2016/04/real_Estate.jpg",
    },
  ],
  categoryId: 0,
  city: "Chiroqchi city",
  componentsDto: {
    additional: "River sight",
    airCondition: true,
    courtyard: true,
    furniture: true,
    gasStove: true,
    internet: true,
    tv: true,
  },
  country: "Uzbekistan",
  description: "Bills alse covered",
  favorite: true,
  homeAmenitiesDto: {
    additional: "string",
    busStop: true,
    garden: true,
    market: true,
    park: true,
    parking: true,
    school: true,
    stadium: true,
    subway: true,
    superMarket: true,
  },
  houseDetails: {
    area: 2,
    bath: 1,
    beds: 3,
    garage: 1,
    room: 2,
    yearBuilt: 2020,
  },
  locations: {
    latitude: 0,
    longitude: 0,
  },
  name: "Great House",
  price: 3000,
  region: "Qashqadaryo",
  salePrice: 4000,
  status: true,
  zipCode: "63427",
};

export const AddNew = () => {
  const navigate = useNavigate();
  const { request } = useHttp();
  const [map, setMap] = useState(null);
  const [data, setData] = useState(body);
  const { id } = useParams();

  // useQuery(
  //   "Get single Item",
  //   () => {
  //     return (
  //       id &&
  //       request({
  //         url: `/api/v1/houses${id}`,
  //         token: true,
  //       })
  //     );
  //   },
  //   {
  //     onSuccess: (res) => {
  //       console.log(res, 'hithere')
  //       setData(res?.data);
  //     },
  //   }
  // );

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

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

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

  const { mutate } = useMutation(
    () =>
      request({
        url: `/api/v1/houses`,
        token: true,
        method: "POST",
        body,
      })

    // fetch(`${url}/api/v1/houses`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/json',
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify(body)
    // }

    // ).then((res) => res.json())
  );

  const onSubmit = () => {
    mutate('', {
      onSuccess: (res) => {
        console.log(res)
        if (res.success) {
          navigate('/profile/properties')
        }
      }
    },
      {
        onError: (res) => {
          console.log(res)
       }
     } 
    
    )
  }

  // const { mutate: update } = useMutation(
  //   (id) =>
  //     id &&
  //     request({
  //       url: `/api/v1/houses/${id}`,
  //       token: true,
  //       method: "PUT",
  //       body: data,
  //     })
  // );

  // const onSubmit = () => {
  //   if (id) {
  //     // console.log(id, "id");
  //     update(id, {
  //       onSuccess: (res) => {
  //         // console.log(res, "upd res");
  //         // console.log(res?.success, "success");
  //         if (res?.success) {
  //           navigate("/properties/profile");
  //         }
  //       },
  //     });
  //   } else {
  //     mutate("", {
  //       onSuccess: (res) => {
  //         console.log(res?.success, "sss");
  //         if (res?.success) {
  //           navigate("/properties/profile");
  //         }
  //       },
  //     });
  //   }
  // };

  // const onChange = ({ target: { name, value } }) => {
  //   console.log(name);
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="center">
        <Container>
          <Title>Add New Properties</Title>

          <Section>
            <div className="subTitle">Contact Information</div>
            <Wrapper>
              <Input
                name={"name"}
                borderr={"open"}
                height={"30px"}
                placeholder={"Property Title"}
              />
              <Input borderr={"open"} height={"30px"} placeholder={"Type"} />
            </Wrapper>
            <Wrapper>
              <Input
                borderr={"open"}
                height={"30px"}
                placeholder={"Property Description"}
              />
            </Wrapper>
          </Section>

          <Section>
            <div className="subTitle">Additional</div>

            <Wrapper>
              <Input borderr={"open"} height={"30px"} placeholder={"Beds"} />
              <Input borderr={"open"} height={"30px"} placeholder={"Bath"} />
              <Input borderr={"open"} height={"30px"} placeholder={"Garages"} />
            </Wrapper>
            <Wrapper>
              <Input
                borderr={"open"}
                height={"30px"}
                placeholder={"Year built"}
              />
              <Input
                borderr={"open"}
                height={"30px"}
                placeholder={"Home area (sqft)"}
              />
              <Input borderr={"open"} height={"30px"} placeholder={"Rooms"} />
            </Wrapper>
          </Section>

          <Section>
            <div className="subTitle">Price</div>
            <Wrapper>
              <Input
                borderr={"open"}
                height={"30px"}
                placeholder={"Price ($)"}
              />
              <Input
                borderr={"open"}
                height={"30px"}
                placeholder={"Sale Price"}
              />
            </Wrapper>
          </Section>

          <Section>
            <div className="subTitle">Location</div>
            <Wrapper>
              <Input borderr={"open"} height={"30px"} placeholder={"region"} />
              <Input borderr={"open"} height={"30px"} placeholder={"Address"} />
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

          <Button type={"primary"} width={150} onClick={onSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    
  );
};
