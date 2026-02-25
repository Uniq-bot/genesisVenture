"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Description() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return(
        <div ref={ref} className="w-full min-h-150  bg-blue-900 gap-8 md:gap-20 flex flex-col overflow-hidden py-10 md:py-0">
            <motion.p
                initial={{
                    y: 100,
                    opacity: 0
                }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl w-full md:w-2/3 pt-10 md:pt-20 px-5 md:pl-5 text-left font-[PPFONT] overflow-hidden">
                Our team of over 50 in-house consultants in New York City helps clients navigate even the toughest building code and zoning challenges. With 33 years of experience across construction regulations, our team supports feasibility reviews, CCD1s, amendments, fire safety, land use matters, landmark coordination, violation resolution, and all the permits, approvals, and sign-offs your project needs.
            </motion.p>
            <div className="flex flex-col mb-10 md:flex-row justify-end gap-3 overflow-hidden px-5 md:px-0">
                <motion.p
                initial={{
                    y: -100,
                    opacity: 0
                }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-xs md:text-sm tracking-tighter w-full md:w-100 pr-0 md:pr-5 text-left font-mono">
                    From the first idea to sign-off, Outsource is by your side—helping you navigate code, construction, compliance, and whatever else your project needs.
                </motion.p>
                <motion.p
                initial={{
                    y: 100,
                    opacity: 0
                }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-xs md:text-sm tracking-tighter w-full md:w-100 pr-0 md:pr-5 text-left font-mono">
                    Partnering with Outsource Special Inspections, Inc., we deliver a streamlined, start-to-finish approach—from permits and approvals to inspections and sign-offs.
                </motion.p>
            </div>

        </div>
    )
}