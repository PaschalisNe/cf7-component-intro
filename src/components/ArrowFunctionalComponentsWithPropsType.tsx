// type Props = {
//     title: string;
//     description: string;
// }

type PropA = {
    title: string;
}

type PropB = {
    description: string;
}

type Props = PropA & PropB;

// interface Props {
//     title: string;
// }
// interface Props {
//     description: string;
// }

const ArrowFunctionalComponentWithPropsType = ({title, description}: Props) => {

    return (
    <>
        <h1 className = "text-center mt-12 text-xl"> {title} </h1>
        <p className = "text-gray-800 text-center mt-2" > {description} </p>
    </>
    )
}

export default ArrowFunctionalComponentWithPropsType;