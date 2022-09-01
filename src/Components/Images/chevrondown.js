import react from 'react';
import { motion } from 'framer-motion';
const ChevronDown = (props) => (
  <motion.svg
    viewBox="0 0 16 16"
    width={props.width}
    height={props.height}
    fill={props.fill}
    style={{
      paddingTop: 5,
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
    {...props}
  >
    <motion.path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      initial={{ y: 0 }}
      animate={{ y: 25 }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
  </motion.svg>
);

export default ChevronDown;
