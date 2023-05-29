import styled from "styled-components";
import avatar from '../assets/avatar.jpg';

const Wrapper = styled.div`
  min-width: 300px;
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #120f13;
  overflow-x: hidden;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #120f13;
  border-bottom: 1px solid #ffffff;
`;

const Title = styled.label`
  margin-left: 24px;
  color: #e0e0e0;
  font-weight: bold;
`;

const AddChannelButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #252329;
  color: #e0e0e0;
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const ChannelsWrapper = styled.div`
  height: calc(100vh - 121px);
  overflow-y: auto;
`;

const ChannelsDiv = styled.div`
  margin-top: 20px;
  margin-left: 24px;
`;

const SearchInput = styled.input`
  width: 256px;
  height: 40px;
  background-color: #3c393f;
  color: #828282;
  border: none;
  border-radius: 4px;
`;

const ChannelImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  background-color: #252329;
  color: #ffffff;
  border-radius: 6px;
`;

const Channel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 256px;
  margin: 24px 0 20px 0;
  cursor: pointer;
`;

const ChannelTitle = styled.label`
  margin-left: 10px;
  color: #bdbdbd;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: #0b090c;
`;

const LeftBar = props => {

  return (
    <Wrapper>
      <TitleDiv>
        <Title>Channels</Title>
        <AddChannelButton>+</AddChannelButton>
      </TitleDiv>
      
      <ChannelsWrapper>
        <ChannelsDiv>
          <SearchInput placeholder="Search"></SearchInput>
          <Channel>
            <ChannelImgDiv>FD</ChannelImgDiv>
            <ChannelTitle>FRONT-END DEVELOPERS ASD aWDA</ChannelTitle>
          </Channel>
          <Channel>
            <ChannelImgDiv>FD</ChannelImgDiv>
            <ChannelTitle>FRONT-END DEVELOPERS</ChannelTitle>
          </Channel>
        </ChannelsDiv>
      </ChannelsWrapper>
      
      <ProfileDiv>
        <img src={avatar} style={{width: '34px', height: '34px', borderRadius: '6px', marginLeft: '24px'}}/>
        <label style={{marginLeft: '20px', color: '#828282', fontWeight: 'bold'}}>Zimahaba</label>
      </ProfileDiv>
    </Wrapper>
  )
}

export default LeftBar;