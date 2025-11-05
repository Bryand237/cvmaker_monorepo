import type { CV } from "@cv-maker-app/utils";
import type { UseFormReturn } from "react-hook-form";

const ExperienceInput = ({
  register,
}: UseFormReturn<CV["experience"][number]>) => {
  return (
    <div className="bg-slate-600/8 rounded-md w-full h-fit">
      <div className="flex">
        <input
          {...register("position")}
          type="text"
          className="w-full outline-none h-10 py-2 px-3 scroll-m-20 text-2xl font-medium tracking-tight"
          placeholder="Poste"
        />
        <input
          {...register("company")}
          type="text"
          className="w-full outline-none h-10 py-2 px-3 scroll-m-20 text-2xl font-medium tracking-tight"
          placeholder="Entreprise"
        />
      </div>
      <div className="flex">
        <input
          {...register("startDate")}
          type="text"
          className="w-full outline-none h-10 py-2 px-3 leading-7"
          placeholder="Debut"
        />
        <input
          {...register("endDate")}
          type="text"
          className="w-full outline-none h-10 py-2 px-3 leading-7"
          placeholder="Fin"
        />
      </div>
      <textarea
        {...register("description")}
        className="w-full outline-none h-10 py-2 px-3 text-muted-foreground resize-none"
        placeholder="Activités menées"
      />
    </div>
  );
};

export default ExperienceInput;
