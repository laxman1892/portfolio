import { InfinitySpin } from "react-loader-spinner";

function Preloader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        transition: "all 200ms ease-in-out",
      }}
    >
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Preloader;
