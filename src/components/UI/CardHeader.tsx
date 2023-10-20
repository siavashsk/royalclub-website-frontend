import { Typography, CardHeader as HeaderCard } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";

const CardHeader = ({ title }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  return (
    <HeaderCard variant="gradient" color={sidenavColor} className="mb-8 p-6">
      <Typography variant="h6" color="white">
        {title}
      </Typography>
    </HeaderCard>
  );
};

export default CardHeader;
