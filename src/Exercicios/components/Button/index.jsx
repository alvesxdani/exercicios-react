import Api from "../../api/api";
import Button from "./style";

const StyledButton = ({ product }) => {
  return (
    <Button onClick={Api(product)} key={product}>{product}</Button>
  )
}

export default StyledButton;