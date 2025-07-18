// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"

// export function Preloader() {
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 3000)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 z-50 bg-black flex items-center justify-center"
//         >
//           <div className="text-center">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//               className="w-16 h-16 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"
//             />
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-2xl font-oswald tracking-wider"
//             >
//               LOADING REEL...
//             </motion.h2>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
