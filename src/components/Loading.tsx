import { CSSProperties } from "react";
import { HashLoader } from "react-spinners"

const override: CSSProperties = {
  width: 'full',
  display: "flex",
  justifyContent: "center",
};

const Loading = () => {
  return (
    <div className="mt-16">
      <HashLoader
        cssOverride={override}
        size={50}
        color="#0f30da" />
    </div>
  )
}

export default Loading