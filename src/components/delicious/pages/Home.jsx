import Popular from "../componn/Popular";
import Veggie from "../componn/Veggie";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className="home"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
        <Veggie />
        <Popular />
    </motion.div>
  )
};

export default Home;
