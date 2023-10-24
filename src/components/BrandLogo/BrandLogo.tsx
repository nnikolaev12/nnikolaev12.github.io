import { IBrandLogoProps } from "./IBrandLogo";

export const BrandLogo = (props: IBrandLogoProps) => {
  const { name, src } = props;

  return (
    <li>
      <img src={"/assets/img/brands/" + src} alt={name} />
    </li>
  );
};
