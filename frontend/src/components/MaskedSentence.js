import isLetter from '../util/isLetter';

const MaskedSentence=({text})=>{
    return text.split("").map((char)=> isLetter(char) ? "*" : char)

}

export default MaskedSentence;