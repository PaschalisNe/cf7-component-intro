// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

// import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AutoRedirectAdvancedPage from "./pages/AutoRedirectAdvancedPage.tsx";
import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterAdvancedUseState from "./components/CounterAdvancedUseState.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithCustomHookAdv from "./components/CounterWithCustomHookAdv.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";

function App() {


  return (
    <>
        {/*<ClassComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent />*/}
        {/*<ArrowFunctionalComponentWithProps title = "Is an Arrow Functional Component with Props" />*/}
        {/*<ArrowFunctionalComponentWithPropsType title = "Is an Arrow Functional Component with Props and Types"*/}
        {/*                                       description = "This this the description of the component" />*/}
        {/*<CodingFactoryLogo/>*/}

        {/*<Layout>*/}
            {/*<h1 className="text-center text-2xl font-bold"> This is the heading1 of the Layout </h1>*/}
            {/*<FunctionalComponent/>*/}

            {/*<ClassComponentWithState />*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvancedUseState />*/}
            {/*<CounterWithCustomHook />*/}
            {/*<CounterWithCustomHookAdv />*/}
            {/*<CounterWithReducer />*/}
            {/*<Todo/>*/}
            {/*<OnlineStatus/>*/}

        {/*</Layout>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>

                    <Route element= {<RouterLayout/>}>
                        {/*<Route index element={<HomePage />}/>*/}
                        <Route index element={<MultiFieldForm/>} />
                    </Route>

                    {/*<Route index element={<HomePage/>} />*/}
                    // ειναι το ιδιο με το path="/"
                    <Route path="/" element={<HomePage/>} />
                    <Route path="name-changer" element={<NameChangerPage/>} />

                    {/*<Route path="examples?" >*/}
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage/>} />
                        <Route path="name-changer" element={<NameChangerPage/>} />
                        <Route path="online-status" element={<OnlineStatusPage/>} />
                        <Route path="auto-redirect" element={<AutoRedirectPage/>} />
                        <Route path="auto-redirect-advanced" element={<AutoRedirectAdvancedPage/>} />
                    </Route>

                    <Route path="users/:userId" element={<UserPage/>} />

                    {/*<Route path="files/*" element={<FilePage/>}/>*/}



                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    </>
  )
}

export default App
