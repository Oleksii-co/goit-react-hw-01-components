import styled from 'styled-components';

export const StyledProfile = styled.div`
margin: 0 auto;
border-radius: 10px;
display: flex;
flex-direction: column;
width: 300px;
margin-top: 70px;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const ProfileDescription = styled.div`
border-radius: 10px 10px 0 0;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 30px;
padding-top: 30px;
background-color: #fff;
`;

export const ProfileAvatar = styled.img`
width: 130px;
height: 130px;
border-radius: 50%;
margin-bottom: 20px;
`;

export const ProfileName = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 15px;
`
export const ProfileTag = styled.p`
color: #a0a0a0;
margin-bottom: 15px;
`
export const ProfileLocation = styled.p`
color: #a0a0a0;
`

export const ProfileStats = styled.ul`
display: flex;
justify-content: center;
align-items: center;
background-color: #d8d8d8;
justify-content: space-around;
border-top: 1px dashed #c0c0c0;
`;

export const ProfileItem = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 70px;
  border: 1px solid #e4e9f0;
`

export const ProfileLabel = styled.span`
color: #a0a0a0;
margin-bottom: 7px;
`
export const ProfileQuantity = styled.span`  

font-weight: 500;
`
