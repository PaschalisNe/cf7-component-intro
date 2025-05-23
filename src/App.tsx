import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentsWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType.tsx";


function App() {


  return (
    <>
        <ClassComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponent />
        <ArrowFunctionalComponentWithProps title = "Is an Arrow Functional Component with Props" />
        <ArrowFunctionalComponentWithPropsType title = "Is an Arrow Functional Component with Props and Typs"
                                               description = "This this the description of the component" />
    </>
  )
}

export default App
