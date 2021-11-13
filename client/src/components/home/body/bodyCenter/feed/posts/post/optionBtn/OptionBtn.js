import "./OptionBtn.css";

const OptionBtn = ({ Icon, title, color }) => {
  return (
    <div className="option-btn">
      {Icon && <Icon sx={{ color: color }} />}
      <p>{title}</p>
    </div>
  )
}

export default OptionBtn
