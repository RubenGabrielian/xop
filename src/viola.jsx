import axios from "axios";
import { useEffect } from "react";

export default function Viola() {
  useEffect(() => {
    axios
      .get("https://interactive.vjur.am/?page=1&ajax=list-post")
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>Viola</div>;
}
