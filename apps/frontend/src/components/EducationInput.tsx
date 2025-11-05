import type { CV } from "@cv-maker-app/utils";
import type { UseFormReturn } from "react-hook-form";

const EducationInput = ({
  register,
}: UseFormReturn<CV["education"][number]>) => {
  return (
    <div className="relative bg-slate-600/8 rounded-md w-full h-fit">
      <input
        {...register("degree")}
        type="text"
        className="w-full outline-none h-10 py-2 px-3 scroll-m-20 text-2xl font-medium tracking-tight"
        placeholder="Diplome"
      />
      <div className="flex">
        <input
          {...register("institution")}
          type="text"
          className="w-full outline-none h-10 py-2 px-3 leading-7"
          placeholder="Institution"
        />
        <div className="flex">
          <input
            {...register("startDate")}
            type="text"
            className="w-full outline-none h-10 py-2 px-3 leading-7"
            placeholder="Date Debut"
          />
          <input
            {...register("endDate")}
            type="text"
            className="w-full outline-none h-10 py-2 px-3 leading-7"
            placeholder="Date Fin"
          />
        </div>
      </div>
      <div className="flex">
        <input
          {...register("fieldOfStudy")}
          type="text"
          className="w-4/7 outline-none h-10 py-2 px-3 leading-7"
          placeholder="Unite d'enseignement"
        />
        <textarea
          {...register("description")}
          className="w-full outline-none h-10 py-2 px-3 text-muted-foreground resize-none"
          placeholder="description"
        />
      </div>
    </div>
  );
};

export default EducationInput;
