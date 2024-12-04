import styled from 'styled-components';
import '../App.css'
import { useAppSelector } from '../redux/hooks';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const StyledRecEvent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: var(--event-card-background);
  margin: 0 48px;
  border-radius: 8px;
  gap: 16px;
  width: 800px;
  margin: auto;


  .home_evnt_img img {
    width: 300px;
    height: 300px;
  }

  .home_evnt_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
    justify-content: space-between;
  }

  .home_evnt_content .home_evnt_main_info {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .home_evnt_content .home_evnt_main_info h3 {
    font-size: 40px;
    margin: 0;
    margin-bottom: 8px;
    text-align: center;
  }

  .home_evnt_content .home_evnt_additional_info h4 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
  }

  .home_evnt_bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

function Home() {
  const events = useAppSelector(state => state.events.events)
  const randId = getRandomInt(0, events.length - 1)
  const event = events[randId]

  const navigate = useNavigate()
  return (
    <Container>
        <h1>Recomended event</h1>
        <StyledRecEvent>
          <div className='home_evnt_img'>
            <img src={event.imgSrc} />
          </div>
          <div className='home_evnt_content'>
            <div className='home_evnt_main_info'>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
            <div className='home_evnt_bottom'>
              <div className='home_evnt_additional_info'>
                <h4><b>Start date: </b>{event.startDate.toDateString()}</h4>
                <h4><b>End date: </b>{event.startDate.toDateString()}</h4>
                <h4><b>Place: </b>{event.city}, {event.place}</h4>
              </div>
              <Button onClick={() => navigate(`events/${event.id}`)} type="primary" size='large'>
                Go to event
              </Button>
            </div>
          </div>
        </StyledRecEvent>
    </Container>
  );
}

export default Home;