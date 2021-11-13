import "./IconBtn.css";

const IconBtn = ({ Icon, active }) => {
  return (
    <button className={`icon-btn ${active}`}>
      <Icon fontSize="large" />
    </button>
  )
}

export default IconBtn
