import { PureComponent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleLoader from "../components/SimpleLoader";

export class Test extends PureComponent {
    
    render() {
        
        const notify = () => toast("Wow so easy!");

        return (
          <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
            <SimpleLoader />
          </div>
        );
           
    }
}

export default Test;