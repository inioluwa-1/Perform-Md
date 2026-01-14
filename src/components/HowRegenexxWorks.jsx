"use client"
import React from 'react'

export default function HowRegenexxWorks() {
    return (
        <section className="bg-[#1D242C] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-20">
                    How Regenexx Procedures Work
                </h2>

                {/* Procedures Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                    {/* Sd - Same Day Stem Cell Procedures */}
                    <div className="space-y-6">
                        {/* Sd Box */}
                        <div className="flex justify-center content-center mx-auto lg:block">
                            <img src="/imageSD.png" alt="" />
                        </div>

                        {/* Sd Description */}
                        <div className="text-white space-y-4 text-sm sm:text-base leading-relaxed lg">
                            <p>
                                <span className="text-[#50C3E9] font-semibold">Regenexx-SD</span> is <span className="text-[#50C3E9] font-semibold">Bone Marrow Concentrate</span>. These repair cells from your own body live inside all of us in various tissues, poised to leap into action to repair damage as it occurs. As we age or have big injuries, we may not be able to recruit enough of these cells to the site to fully repair the area.
                            </p>

                            <p>
                                <span className="text-[#50C3E9] font-semibold">
                                The Regenexx-SD</span> Procedure helps overcome this problem by harvesting Bone Marrow from an area of the back of the hip that contains a dense population of these important cells and then concentrating those cells before precisely injecting them into the injured area using advanced imaging guidance.
                            </p>

                            <p>
                                The goal of the procedure is to reduce pain and improve function by promoting the body's own ability to heal naturally. This Patented <span className="text-[#50C3E9] font-semibold">Bone Marrow Concentrate</span> Protocol can be used for a wide range of orthopedic conditions. Your Regenexx doctor will evaluate your condition and your imaging to determine whether a <span className='text-[#50C3E9] font-semibold'>bone marrow concentrate</span> or platelet-based treatment is the best option for your orthopedic condition.
                            </p>
                        </div>
                    </div>

                    {/* Scp - Super Concentrated Platelets */}
                    <div className="space-y-6">
                        {/* Scp Box */}
                          <div className='flex justify-center content-center mx-auto lg:block'>
                            <img src="/imageSCP.png" alt="" />
                        </div>

                        {/* Scp Description */}
                        <div className="text-white space-y-4 text-sm sm:text-base leading-relaxed">
                            <p>
                                Platelet Rich Plasma (<span className="text-[#50C3E9] font-semibold">PRP</span>) and <span className="text-[#50C3E9] font-semibold">Platelet Lysate</span> are Platelet procedures that contain healing <span className="text-[#50C3E9] font-semibold">growth factors</span> from your own blood that promote your body's natural ability to repair itself.
                            </p>

                            <p>
                                The use of <span className="text-[#50C3E9] font-semibold">PRP</span> to treat joint, tendon, ligament, and muscle injuries is becoming well known, thanks to exposure from professional athletes. Platelet injections have a stimulating effect on the repair cells within the targeted area, making those cells work harder to perform their natural job of healing the body. Like all Regenexx procedures, Regenexx SCP procedures are performed with high-level imaging guidance to ensure the most accurate placements of cells into the desired area.
                            </p>

                            <p>
                                Our Advanced Platelet Procedures are more concentrated and purer than <span className="text-[#50C3E9] font-semibold">PRP</span> created by the automated machines used at most <span className="text-[#50C3E9] font-semibold">regenerative medicine</span> clinics, increasing its ability to stimulate the body's natural healing response. Platelet procedures are commonly used for soft tissue injuries, mild arthritis, spine conditions, and around nerves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
