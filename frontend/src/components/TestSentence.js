import {useParams} from "react-router-dom";

const TestSentence  = () => {
    const {id}=useParams()
    return (<div>testing{id}</div>)
};

export default TestSentence;
