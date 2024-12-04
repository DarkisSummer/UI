import styled from "styled-components";
import { MyEvent } from "../../assets/event";
import { useAppDispatch } from "../../redux/hooks";
import { deleteEvent } from "../../redux/eventsSlice";
import { Button } from "antd";

const StyledAdminEvent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    background: var(--event-card-background);
    font-size: 36px;
    border-radius: 10px;
    &:hover {
        background: var(--event-card-background-hover);
    }
`

function AdminEvent(props: MyEvent) {
    const dispatch = useAppDispatch()
    const handleDelete = () => {
        dispatch(deleteEvent(props.id))
    }
    return (
        <StyledAdminEvent>
            <p>{props.name}</p>
            <Button onClick={() => handleDelete()} type="primary" size="large">Delete</Button>
        </StyledAdminEvent>
    );
};

export default AdminEvent;