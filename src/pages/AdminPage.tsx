import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import AdminEvent from "../components/Admin/AdminEvent";
import AddEvent from "../components/Admin/AddEvent";
import Container from "../components/Container";

const StyledAdminPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    .admin_evnt_list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

function AdminPage() {
    const events = useAppSelector(state => state.events.events)
    return (
        <Container>
            <StyledAdminPage>
                <h1>Admin page</h1>
                <h2>Events</h2>
                <div className="admin_evnt_list">
                    {events.map(item => <AdminEvent {...item} />)}
                </div>
                <AddEvent />
            </StyledAdminPage>
        </Container>
    );
};

export default AdminPage;