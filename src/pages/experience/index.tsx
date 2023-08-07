import { MyExperience } from "~/components/experience";
import { Seo } from "~/components/seo";

const Experience = () => {
  return (
    <div>
      <Seo
        title='Albert Dugba - My Experiences'
        description='These are my prior and past professional work engagements'
        linkUrl='https://albertdugba.dev/experience'
        imageUrl='https://res.cloudinary.com/dsdifoazf/image/upload/v1691347988/image_4_1_wgoyz7.jpg'
      />
      <MyExperience />
    </div>
  );
};
export default Experience;
