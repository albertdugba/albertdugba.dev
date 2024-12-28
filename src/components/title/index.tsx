import { Overpass } from "next/font/google";

const overPass = Overpass({ subsets: ["latin"] });

export const Title = ({
  title,
  align,
  subtitle,
}: {
  title: string;
  align?: "center" | "right" | "left";
  subtitle?: string;
}) => (
  <div className='flex flex-col gap-2 mb-6 items-center justify-center'>
    <h1
      className={`lg:text-6xl md:text-5xl text-3xl text-secondary ${
        overPass.className
      } text-${
        align === "center"
          ? "center"
          : align === "left"
          ? "left"
          : align === "right"
          ? "right"
          : ""
      }`}
    >
      {title}
    </h1>

    <h5 className="font-medium">{subtitle}</h5>
  </div>
);
