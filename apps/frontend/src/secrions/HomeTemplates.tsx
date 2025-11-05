import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomeTemplates = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col relative">
      <div className="label absolute top-20 left-0 right-0">
        <div className="flex flex-col w-[50%] mx-auto text-center ">
          <h1 className="scroll-m-40 text-white text-4xl font-extrabold tracking-tight text-balance mb-8">
            Templates
          </h1>
          <p className="text-muted-foreground text-xl">
            Decouvrez nos différents templates de CV/Resume, choisissez un et
            personnalisez-le pour avoir votre propre version.
          </p>
        </div>
      </div>
      <div className="flex gap-16 w-[70%] h-[70%] mx-auto py-10 my-auto items-center justify-center">
        <motion.div
          className="block overflow-hidden"
          style={{ width: "250px", height: "auto" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            className="hidden md:block rounded-md w-full h-full"
            src="/90e3541295a59173c58c6c5dc9fcebef.jpg"
            alt="img/resume"
          />
          {/* <img
            src="/90e3541295a59173c58c6c5dc9fcebef.jpg"
            alt="Description déco"
            className="w-full h-full object-cover object-top"
          /> */}
        </motion.div>
        <motion.div
          className="block overflow-hidden"
          style={{ width: "250px", height: "auto" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            className="hidden md:block rounded-md w-full h-full"
            src="/e8de4d3862ce052ec3384da9eaae7835.jpg"
            alt="img/resume"
          />
          {/* <img
            src="/90e3541295a59173c58c6c5dc9fcebef.jpg"
            alt="Description déco"
            className="w-full h-full object-cover object-top"
          /> */}
        </motion.div>
        <motion.div
          className="block overflow-hidden "
          style={{ width: "250px", height: "auto" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            className="hidden md:block rounded-md  w-full h-full"
            src="/a03e45865cd2af541f4f594120765b1e.jpg"
            alt="img/resume"
          />
          {/* <img
            src="/90e3541295a59173c58c6c5dc9fcebef.jpg"
            alt="Description déco"
            className="w-full h-full object-cover object-top"
          /> */}
        </motion.div>
      </div>
      <div className="absolute bottom-30 left-0 right-0 flex items-center justify-center">
        <motion.div whileTap={{ scale: 0.96 }}>
          <Button size={"lg"} className="rounded-full">
            Commencer
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeTemplates;
