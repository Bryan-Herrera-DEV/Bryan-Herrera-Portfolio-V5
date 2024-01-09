
"use client";
import { ComponentPropsWithRef, createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

export const FadeIn = (
  props: ComponentPropsWithRef<typeof motion.div> & {
    fromTopToBottom?: boolean;
  }
) => {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : props.fromTopToBottom ? -24 : 24 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport
          })}
      {...props}
    />
  )
};
