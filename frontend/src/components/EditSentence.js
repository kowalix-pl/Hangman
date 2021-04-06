import {useParams} from "react-router-dom";

const EditSentence = () => {
    const {id}=useParams()
    return (<div>Editing: {id}</div>)
};

export default EditSentence;