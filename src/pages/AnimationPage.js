import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function AnimationPage({ children }) {
  return (
    <motion.div className="motiondive"
      variants={animation}
      inherit="initial"
      animate="animate"
      exit={"exit"}
      transition={{duration :0.5}}
    >
      {children}
    </motion.div>
  );
}

export default AnimationPage;
