import { useEffect, useRef, useState } from "react";
import DropDownIt from "./DropDownIt";
import first from "../assets/1d.webp";
import second from "../assets/2d.webp";
import third from "../assets/3d.webp"
import fourth from "../assets/4d.webp"
import fifth from "../assets/5d.webp"
import sixth from "../assets/6d.webp"
import seventh from "../assets/7d.svg"
import eight from "../assets/8d.webp"
import DropDownImageIt from "./DropDownImageIt";

export default function DropDown() {
    const arr = [
            {path: first, color: "#14c8eb"}, 
            {path: second, color: "#fa551e"}, 
            {path: third, color: "#fad24b"}, 
            {path: fourth, color: "#ffafa5"}, 
            {path: fifth, color: "#ff8c19"}, 
            {path: sixth, color: "#b4dc19"}, 
            {path: seventh, color: "#b4c8e1"}, 
            {path: eight, color: "#c8aff0"}
    ];

    const [currentDropdown, setCurrentDropDown] = useState(1);
    const [currentDropdownImage, setCurrentDropDownImage] = useState(arr[0]);
    const previousDropdownImage = useRef(currentDropdownImage);

    // useEffect(() => {
    //     previousDropdownImage.current = currentDropdownImage;
    // }, [currentDropdownImage])

    function handleDropDown(e) {
        let parentElement = e.target.closest('.dropdown-list');
        let parentElementId = parentElement.id;
        let childElement = parentElement.children[1];

        if (parentElementId == currentDropdown) return;

        if (childElement && childElement.classList.contains("none")) {
            document.getElementById(currentDropdown).children[1].classList.add('none');
            setCurrentDropDown(parentElementId);
            setCurrentDropDownImage(arr[parentElementId-1]);
            childElement.classList.remove("none");
            previousDropdownImage.current = currentDropdownImage;
        }
    }

    return(
        <>
            <div className="dropdown">
                <div className="dropdown-heading">
                    <h1>What else can Dropbox help you do?</h1>
                    <p>Dropbox brings everything—traditional files, cloud content, and web shortcuts—together in one place.</p>
                </div>
                <div className="dropdown-content">
                    <aside>
                        <div className="aside-content">

                            <DropDownIt id={1} handleDropDown={handleDropDown} dropDownTitle="Get 2 GB of cloud storage for free with Dropbox Basic" dropDownContent="Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you- get a free account, no strings attached!" setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={2} handleDropDown={handleDropDown} dropDownTitle="Dropbox Plus has room for all your content with space to spare" dropDownContent="Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={3} handleDropDown={handleDropDown} dropDownTitle="Dropbox Family is a place for everyone with space for everything" dropDownContent="Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={4} handleDropDown={handleDropDown} dropDownTitle="Make life easier for you and your clients with Dropbox Professional" dropDownContent="Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={5} handleDropDown={handleDropDown} dropDownTitle="Streamline your document workflow with Dropbox Sign" dropDownContent="Save yourself time and hassle with Dropbox Sign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={6} handleDropDown={handleDropDown} dropDownTitle="Centralize, secure, and easily access your work with Dropbox Standard" dropDownContent="Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={7} handleDropDown={handleDropDown} dropDownTitle="DocSend lets you track, analyze, and optimize your content" dropDownContent="Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content." setCurrentDropDown={setCurrentDropDown} />

                            <DropDownIt id={8} handleDropDown={handleDropDown} dropDownTitle="Proactively detect threats to your team’s content with Dropbox Advanced" dropDownContent="Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan." setCurrentDropDown={setCurrentDropDown} />
                        </div>
                    </aside>
                    <section>
                        <DropDownImageIt id={1} prevSrc={previousDropdownImage.current} currSrc={currentDropdownImage}  />
                    </section>
                </div>
            </div>
        </>
    )
}