
export default function DropDownImageIt({ id, prevSrc, currSrc }) {
    const classname = (id === 1 ? "dropdown-image" : "dropdown-image none");
    
    return (
        <>
      <div
        className={classname}
      >
        <div className="dropdown-image-container" style={{backgroundColor: prevSrc.color}}>
            <img src={prevSrc.path} alt="backimage" />
        </div>
        <div className="dropdown-image-container1" style={{ backgroundColor: currSrc.color }}>
            <img src={currSrc.path} alt="" className="" />
        </div>
        {go()}
      </div>
    </>
  );
}

function go() {
    
    let element = document.querySelector('.dropdown-image-container1');
    
    if (!element) return;

    element.animate([
        { transform: 'translateX(100%)' },
        { transform: 'translateX(0%)' },
    ], {
        duration: 300,
    })
    
}