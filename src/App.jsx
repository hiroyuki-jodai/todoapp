import logo from './logo.svg';
import styles from './App.module.css';
import {List} from "./components/Layouts/List";
import {Box, Test} from "./components/Layouts/Box";
import {createSignal} from "solid-js";
import {Container, HopeProvider, Text} from "@hope-ui/solid";
import {TodoList} from "./components/Templates/TodoList";

function App() {
    return (
        <HopeProvider>
            <Container alignContent={"center"} justifyContent={"center"} px={10} py={10} backgroundColor={"#1ABC9C"} minHeight={"100vh"}>
                <TodoList/>
            </Container>
        </HopeProvider>
    );
}

export default App;
