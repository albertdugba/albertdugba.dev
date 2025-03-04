import { Overpass } from "next/font/google";

const overPass = Overpass({ subsets: ["latin"] });

const getAlignmentClass = (align?: "center" | "right" | "left") => {
  switch (align) {
    case "center":
      return "center";
    case "left":
      return "left";
    case "right":
      return "right";
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
  <div className='flex flex-col gap-2 mb-6 items-center justify-center'>
    <h1
      className={`${
        size === "large" ? "lg:text-6xl" : "lg:text-5xl"
      } md:text-5xl text-3xl text-secondary ${
        overPass.className
      } text-${getAlignmentClass(align)}`}
    >
      {title}
    </h1>

    <h5 className='font-medium'>{subtitle}</h5>
  </div>
);
