import { Link } from "react-router-dom"

const DoneButton = () => {
    return(
    <Link to="/Home">
        <button class = "align-middle bg-yellow w-full text-3xl hover:scale-105 rounded-md "> Done </button>
    </Link>
    );
}
export default DoneButton;