import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const DetailDescription = ({ desc }) => {
  const router = useRouter();

  return (
    <div className="text-center">
      <p>{desc}</p>
      <Button variant="contained" color="error" onClick={() => router.back()}>
        Back
      </Button>
    </div>
  );
};

export default DetailDescription;
