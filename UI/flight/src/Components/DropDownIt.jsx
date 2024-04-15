export default function DropDownIt({ id, handleDropDown, dropDownTitle, dropDownContent, setCurrentDropDown }) {

  let element = (
    <>
      <div className="dropdown-list"
        data-id= {id}
        id= {id}
        onClick={(e) => handleDropDown(e)}
      >
        <div className="dropdown-parent">
          <p>{dropDownTitle}</p>
        </div>
        <div className= { id === 1 ? "dropdown-child" : "dropdown-child none" }>
          <p>
            {dropDownContent}
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </>
  );

  return element;
}
