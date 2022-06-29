import React from 'react'
import apart from '../../assets/images/apartment1.jpg'
import user from '../../assets/images/avatar1.png'

import { Container, Icon, Image, Info, InfoWrapper, User, Price } from './style'

export const HouseCard = ({info, mr, ml, margin, onClick}) => {
    // console.log(info, 'info');
    return  (
        <Container mr={mr} ml={ml} margin={margin} onClick={onClick} >
            <Image src={(info?.attachments && info?.attachments[0]?.imgPath) || apart} />
            
            <InfoWrapper> 
                <User>
                    <User.Img src={info?.user || user } />
                </User>
                
                <Info.Title>{info?.description || 'Description'}, Category:{info?.category?.name} </Info.Title>
                
                <Info.Text>
                    {info?.name || 'House'}, {info?.address || 'Address'}, {' '}
                    {info?.city || 'City'}, {info?.country || 'Country'}
                </Info.Text>

                <Info.Details>
                    <Icon.Wrapper>
                        <Icon.Bed />
                        <Info.Text>{info?.houseDetails?.beds || 0 } Beds </Info.Text>
                    </Icon.Wrapper>

                    <Icon.Wrapper>
                        <Icon.Bath />
                        <Info.Text>{info?.houseDetails?.bath || 0} Baths </Info.Text>
                    </Icon.Wrapper>

                    <Icon.Wrapper>
                        <Icon.Garage />
                        <Info.Text>{info?.houseDetails?.garage || 0} Garage </Info.Text>
                    </Icon.Wrapper>

                    <Icon.Wrapper>
                        <Icon.Ruler />
                        <Info.Text>{info?.houseDetails?.area || 0} Sq Ft </Info.Text>
                    </Icon.Wrapper>
                </Info.Details>

            </InfoWrapper>

            <Price>
                <Price.Wrapper>
                    <Price.Origin>${info?.salePrice || 0} / month</Price.Origin>
                    <Price.Sale>${info?.price || 0} / month</Price.Sale>
                </Price.Wrapper>

                <Price.IconWrapper>
                    <Icon.Resize />
                    <Icon.Love/>
                </Price.IconWrapper>
            </Price>
        </Container>
    )
}
