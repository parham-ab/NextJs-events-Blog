import Image from "next/image";
import Typography from "@mui/material/Typography";
// img
import notFound from "/public/img/error.svg";
// components
import LayOut from "../components/common/LayOut";

const NotFound = () => {
  return (
    <LayOut
      title={"404 | Error"}
      keywords={"404"}
      description={"Page you,ve been looking for not found!"}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Image
          width={"600px"}
          src={notFound}
          alt="صفحه ای که به دنبال آن بودید یافت نشد"
        />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ color: "error.main", textAlign: "center" }}
        >
          Page you've been looking for not found!
        </Typography>
      </div>
    </LayOut>
  );
};

export default NotFound;
