import { Button, Input, Modal } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { addEvent } from "../../redux/eventsSlice";

const StyledFieldList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export type AddEventData = {
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    city: string,
    place: string
}

function AddEvent() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [city, setCity] = useState('')
    const [place, setPlace] = useState('')

    const dispatch = useAppDispatch()

    const data: AddEventData = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        city: city,
        place: place
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
  
    const handleOk = () => {
        dispatch(addEvent(data))
        setIsModalOpen(false);
    };
  
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    
    return (
        <>
            <Button onClick={showModal} size="large" type="primary">Add event</Button>
            <Modal title="Add event" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <StyledFieldList>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value) }
                    placeholder="Name of event"
                    required
                />
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value) }
                    placeholder="Description for event"
                    required
                />
                <Input
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value) }
                    placeholder="Start date ('YYYY-MM-DD')"
                    required
                />
                <Input
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value) }
                    placeholder="End date ('YYYY-MM-DD')"
                    required
                />
                <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value) }
                    placeholder="City"
                    required
                />
                <Input
                    value={place}
                    onChange={(e) => setPlace(e.target.value) }
                    placeholder="Place"
                    required
                />
                </StyledFieldList>
            </Modal>
        </>
    );
};

export default AddEvent;