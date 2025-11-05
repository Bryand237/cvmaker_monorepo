import { Button } from "@/components/ui/button";
import type { CV } from "@cv-maker-app/utils";
import { Edit, X } from "lucide-react";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";

type SkillGroupProps = {
  groupTitle: string;
  skills: CV["skills"];
  skillForm: UseFormReturn<CV["skills"][number]>;
};

const SkillGroup = ({ groupTitle, skills, skillForm }: SkillGroupProps) => {
  const [inpuTSkill, setInputSkill] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <h4 className="scroll-m-20 text-xl font-medium mb-4 tracking-tight">
        {groupTitle}
      </h4>
      <div className="flex items-center gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill bg-slate-200 text-sm rounded-full w-fit py-1 px-2 flex items-center gap-2"
          >
            {skill.name}
            <X size={18} />
          </div>
        ))}
      </div>
      {inpuTSkill ? (
        <div className="flex">
          <input
            {...skillForm.register("name")}
            type="text"
            className="bg-gray-100 rounded-md my-2 px-3 outline-none h-10 text-foreground"
            placeholder="Nom de la compétences"
          />
          <select
            {...skillForm.register("level")}
            className="bg-gray-100 rounded-md my-2 px-3 outline-none h-10 text-foreground"
          >
            <option value={""}>Niveau</option>
            <option value={"Beginer"}>Débutant</option>
            <option value={"Intermediate"}>Intermédiaire</option>
            <option value={"Advance"}>Avancé</option>
            <option value={"Expert"}>Expert</option>
          </select>
          <button
            type="button"
            className="bg-gray-100 rounded-md my-2 px-3 outline-none h-10 text-foreground opacity-20 cursor-pointer"
            onClick={() => setInputSkill(false)}
          >
            <X />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="text-gray-500 mt-4 hover:text-gray-600"
          onClick={() => setInputSkill(true)}
        >
          Add skill
        </button>
      )}
      <div className="absolute rounded-full top-0.5 right-0.5">
        <Button variant="outline" size={"icon"} className="rounded-full">
          <Edit />
        </Button>
      </div>
    </div>
  );
};

export default SkillGroup;
