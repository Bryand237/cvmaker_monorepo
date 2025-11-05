import { Group } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute shadow-md rounded-full top-6 left-4 right-4 h-13 bg-white/10 backdrop-blur-sx text-white p-4 flex items-center justify-between">
      <div className="logo p-2 mr-24 rounded-md text-white">
        <Group />
      </div>
      <div className="links text-white md:flex items-center gap-4">
        <NavLink to={"/about"} className={"hover:underline"}>
          A propos
        </NavLink>
      </div>
      <div className="actions flex items-center gap-4">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant={"default"}
            className="dark rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            Commencer
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHeader;
