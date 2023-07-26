import {Container, HopeProvider, Text} from "@hope-ui/solid";
import {TodoList} from "./components/Templates/TodoList";

function App() {
    return (
        <HopeProvider>
            <Container alignContent={"center"} justifyContent={"center"} px={10} py={4} backgroundColor={"#1ABC9C"} minHeight={"100vh"}>
                <TodoList/>
            </Container>
        </HopeProvider>
    );
}

export default App;
