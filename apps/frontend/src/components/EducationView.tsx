import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

type EducationViewProps = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  fieldOfStudy: string;
};

const EducationView: FC<EducationViewProps> = ({
  degree,
  institution,
  startDate,
  endDate,
  description,
  fieldOfStudy,
}: EducationViewProps) => {
  return (
    <div className="w-full max-h-[198px] border-b py-4 relative flex flex-col gap-2">
      <h3 className="scroll-m-20 text-2xl font-medium tracking-tight">
        {degree}
      </h3>
      <p className="leading-7">
        {institution} - {`(${startDate} - ${endDate})`}
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-1">
        <li>
          {fieldOfStudy}: {description}
        </li>
      </ul>

      <div className="absolute top-2.5 right-2.5 flex items-center gap-4">
        <Button variant="outline" size={"icon"} className="rounded-full ">
          <Edit />
        </Button>
        <Button variant="outline" size={"icon"} className="rounded-full ">
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default EducationView;
