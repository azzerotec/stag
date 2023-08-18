import { Coluna } from "./auxiliares";
import background from "~/images/background.png";

export const BackgroundImage = () => (
  <Coluna className="w-full grow">
    <div
      className="flex h-full w-full grow"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  </Coluna>
);
