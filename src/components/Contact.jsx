import{CONTACT} from "../constants";
import { SiLinkedin,SiFacebook,SiInstagram } from "react-icons/si";
const Contact = () => {
    return (<div className="border-b border-neutral-900 pb-8 ">
        <h1 className="my-8 text-center text-4xl font-semibold ">Get In Touch</h1>
        <div className="text-center tracking-tighter max-w-md mx-auto">
            <p className=" lg:justify-middle rounded  px-2 py-1 bg-neutral-800 shadow-md my-2 text-lg "> <span className="font-semibold text-purple-500"> Number: </span> {CONTACT.phoneNo}</p>
            <p className=" lg:justify-middle rounded  px-2 py-1 bg-neutral-800 shadow-md my-2 text-lg "> <span className="font-semibold text-purple-500"> Email: </span> {CONTACT.email}</p>
        </div>
        <div className=" lg:justify-middle  rounded bg-neutral-800 shadow-md my-2  p-3 max-w-md mx-auto ">
            <div className="flex justify-center space-x-4">
            <SiLinkedin className="text-xl text-blue-600" />
            <SiFacebook className="text-xl text-blue-500" />
            <SiInstagram className="text-xl text-pink-600" />
         </div>
        </div>
    </div>
     );               
}
 
export default Contact;