import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Search } from "@styled-icons/material-twotone";
import { ToggleButtonGroup, ToggleButton } from "@mui/material/";
import _styled from "@mui/system/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 64px);
  width: 100vw;
  overflow-y: auto;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  height: 6.4rem;
  width: 100vw;
`;
export const Logo = styled(SVG)`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;

  background: #96a5f1;
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  color: #1a1c19;
`;
export const SearchIcon = styled(Search)`
  width: 3rem;
  height: 3rem;
  margin-right: 2.7rem;
`;

export const Profile = styled.div`
  width: 3rem;
  height: 3rem;

  background: #adf4a1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.8rem;
  color: #002202;
`;

export const Tabs = _styled(ToggleButtonGroup)`
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;

`;
export const Tab = _styled(ToggleButton)`
width: 100%;
border-radius: 0;
background: #FAFAFA;
border: none; 
border-bottom: 1px solid #AFB1B6;


/* label small */
font-family: 'Work Sans';
font-style: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.6px;
color: #61646B;
text-transform: capitalize;

&.Mui-selected {
    color: #3A00E5;
    background:#F7F5FF;
    border-color:#3A00E5;
}
`;

export const Playlists = _styled(ToggleButtonGroup)`
display: flex;
flex-direction: row;
width: 100%;
gap: .8rem;
padding: 2.4rem 1.6rem;

`;
export const Playlist = _styled(ToggleButton)`
border-radius: 8px !important;
border: 1px solid #757780 !important;
text-transform: capitalize;

font-family: 'Roboto';
font-style: normal;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.1px;
color: #45464F;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  overflow-y: auto;
`;

export const Section = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;

export const SectionTitle = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;
export const SectionSubtitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const AlbumContainer = styled.div`
  flex-direction: row; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  width: 100vw;
  height: 80px;
  padding: 0 16px;
  margin-top: 24px;
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  z-index: 1000;
  background: #2f75bb;
  border-radius: 24px;
  width: calc(100dvw - 32px);
  height: max-content;
  box-shadow: 0px 1px 2px rgba(0, 14, 51, 0.25);
  display: flex;
  color: white;
  flex-direction: column;
  padding: 16px;
`;

export const ModalTitle = styled.div`
  height: 36px;
  line-height: 36px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 184px;
  font-size: 28px;
  justify-content: space-between;
  padding: 24px 0;
`;

export const ModalButton = styled.button`
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  align-item: center;
  color: white;
  cursor: pointer;
  border: 1px white solid;
  border-radius: 8px;
  background: #2f75bb;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  width: 100%;
  line-height: 48px;
  font-size: 24px;
  cursor: pointer;
`;