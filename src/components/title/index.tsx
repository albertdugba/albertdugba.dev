import { Overpass } from "next/font/google";

const overPass = Overpass({ subsets: ["latin"] });

const getAlignmentClass = (align?: "center" | "right" | "left") => {
  switch (align) {
    case "center":
      return "items-center justify-center text-center";
    case "right":
      return "items-end justify-end text-right";
    case "left":
      return "items-start justify-start text-left";
    default:
      return "";
  }
};

export const Title = ({
  title,
  align,
  subtitle,
  size = "large",
}: {
  title: string;
  align?: "center" | "right" | "left";
  subtitle?: string;
  size?: "normal" | "large";
}) => (
  <div className={`flex flex-col gap-2 mb-6 ${getAlignmentClass(align)}`}>
    <h1
      className={`${
        size === "large" ? "lg:text-6xl" : "lg:text-5xl"
      } md:text-5xl text-3xl text-secondary ${overPass.className}`}
    >
      {title}
    </h1>

    {subtitle && <h5 className='font-medium'>{subtitle}</h5>}
  </div>
);
