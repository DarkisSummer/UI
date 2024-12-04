import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Container from "../components/Container";
import { Button, Input } from "antd";
import { useState } from "react";
import { addPeople } from "../redux/eventsSlice";

const StyledEventPage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  gap: 16px;

  .evnt_crd_img img {
    width: 300px;
    height: 300px;
  }

  .evnt_card_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
    justify-content: space-between;
  }

  .evnt_card_content .evnt_card_main_info {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .evnt_card_content .evnt_card_main_info h3 {
    font-size: 40px;
    margin: 0;
    margin-bottom: 8px;
    text-align: center;
  }

  .evnt_card_content .evnt_card_additional_info h4 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
  }

  .evnt_card_bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
const StyledUserList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  text-align: left;
  max-width: 1280px;
  /* background-color: var(--event-card-background); */

  .ppl_list {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    white-space: pre;
    gap: 8px
  }
`

function EventPage() {
  const params = useParams()
  const events = useAppSelector(state => state.events.events)
  const eventData = events.find(item => item.id === params.id)
  const [user, setUser] = useState('')
  const [user_desc, setUserDesc] = useState('')

  const dispatch = useAppDispatch()
  const handleAddUser = () => {
    dispatch(addPeople({id: eventData?.id as string, name: user + ' - ' + user_desc}))
    setUser('')
    setUserDesc('')
  }

  if (!eventData) {
    return (
      <div><h1>Wrong event</h1></div>
    )
  } else {
    return (
      <Container>
        <StyledEventPage>
          <div className='evnt_crd_img'>
            <img src={eventData.imgSrc} />
          </div>
          <div className='evnt_card_content'>
            <div className='evnt_card_main_info'>
              <h3>{eventData.name}</h3>
              <p>{eventData.description}</p>
            </div>
            <div className='evnt_card_bottom'>
              <div className='evnt_card_additional_info'>
                <h4><b>Start date: </b>{eventData.startDate.toDateString()}</h4>
                <h4><b>End date: </b>{eventData.startDate.toDateString()}</h4>
                <h4><b>Place: </b>{eventData.city}, {eventData.place}</h4>
              </div>
              <div>
              <Input
                    value={user}
                    onChange={(e) => setUser(e.target.value) }
                    placeholder="Enter your name"
                />
              <Input
                    value={user_desc}
                    onChange={(e) => setUserDesc(e.target.value) }
                    placeholder="Describe yourself"
                />
                <Button onClick={handleAddUser} type="primary" size='large'>
                  Join the event
                </Button>
              </div>
            </div>
          </div>
        </StyledEventPage>
        <StyledUserList>
          <h2>Current list of joined people:</h2>
          <div className="ppl_list">
            {eventData.people.map((item) => <p>{item} </p>)}
          </div>
        </StyledUserList>
      </Container>
    );
  }

}

export default EventPage;