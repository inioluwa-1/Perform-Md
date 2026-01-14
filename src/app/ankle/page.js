import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'
import HeroForm from '@/components/Heroform'
import Medicalaccordion from '@/components/Medicalaccordion'
import Navbar from '@/components/Navbar'
import Patientstories from '@/components/Patientstories'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <>
    <Navbar />
    <HeroForm bgImage="/ankle.jpg"/>
  

        
 <section className='grid lg:grid-cols-2 p-15  gap-2 lg items-center bg-gray-900 w-full'>
                <div className='text-left p-5 ms-20'>
                   <div>
                     <h4 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold leading-tight mb-4">
                    Regenexx® Procedures For Foot & Ankle Condition
                     </h4>
                   </div>
                    <p className="text-lg mb-3 text-white">Orthopedic procedures are non-surgical injection-based procedures for people suffering from foot and ankle injuries, arthritis, or other conditions that cause pain. These procedures utilize concentrated repair cells that are obtained from your own bone marrow or blood to promote your body's own natural ability to heal.

                        <br /> <br />

                    Current surgical treatment options for common ankle injuries and arthritis, include ankle arthroscopy to "clean up" damaged cartilage, fusion of ankle bones where cartilage has been lost, and tendon grafts screwed in place to strengthen loose connections between bones. All are painful and are often not be effective in the long run. These surgeries typically involve a painful post-surgical recovery with a lengthy rehab period to restore strength and mobility to the ankle.Regenexx may help reduce pain and improve function for those with foot or ankle pain due to injury or arthritis eliminating the need for these invasive surgeries.
                    </p>
                </div>
                <div>
                    <Image 
                    src="/pain.jpg" alt="image" width={652} height={289}/>
                </div>

 </section>
    <Medicalaccordion />
    <section className="bg-[#1D242C] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6">
                        <h4 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Considering Ankle Surgery, <br />
                            Fusion or Replacement?
                        </h4>
                        
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                As an alternative to surgery and the long recuperative period involved,
                                tears to Foot and Ankle tendons and ligaments
                                and Ankle Arthritis can often be treated with the healing agents from your own body, 
                                promoting your body's ability to do its natural job of healing.
                            </p>
                            
                            <p>
                            Regenexx Procedures may help alleviate pain and improve function 
                                with a highly specialized, non-surgical, precise image-guided injection procedure. 
                                Patients are often encouraged to walk the same day, and most experience little 
                                downtime from the procedure.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="/doctor2.jpg"
                                    alt="Doctor"
                                    width={652}
                                    height={367}
                                />
                                                            
                            <div className="absolute inset-0 video-overlay flex items-center justify-center">
                                <button className="play-button bg-white bg-opacity-90 rounded-full p-6 shadow-lg hover:bg-opacity-100">
                                    <svg className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 px-6 bg-gray-800 bg-opacity-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    <div className="space-y-6">
                        <h4 className="text-4xl lg:text-5xl text-white font-bold leading-tight">
                            Ankle Ligament Tears, <br />
                            Sprains and Instability
                        </h4>
                        
                        <div className="text-gray-300 text-lg leading-relaxed">
                            <p>
                                When the ligaments that hold the bones of the ankle joint together are 
                                partially torn or stretched, as in the case of a bad sprain or repeated 
                                minor sprains, they can become painful, loose, and weak. This changes how 
                                you walk, putting painful stress on other joints of the foot, as well as 
                                making it more likely that you will sprain the ankle again. This leads to 
                                a cycle of chronic pain and instability.
                            </p>
                        </div>
                    </div>    
                 </div>  
             </div>  
        </section>    
    <Testimonials/>    
    <div className="bg-slate-900 gradient-bg min-h-screen mx-auto px-4 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            How Regenexx Procedures Work
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            <div className="procedure-card rounded-2xl p-8 relative">
                <div className="mb-8">
                    <div className="text-sm procedure-title mb-2" style={{color: "#00A990" }}>Regenexx</div>
                    <div className="element-symbol text-8xl font-bold mb-2 text-white" style={{color: "#00A990" }}>Sd</div>
                    <div className="text-sm text-gray-400" style={{color: "#00A990" }}>Bone Marrow Concentrate</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        <span className="highlight-link">Regenexx-SD</span> is <span className="highlight-link">Bone Marrow Concentrate</span>. These repair cells from your own body live inside all of us in various tissues, poised to leap into action to repair damage as it occurs. As we age or have big injuries, we may not be able to recruit enough of these cells to the site to fully repair the area.
                    </p>
                    
                    <p>
                        The <span className="highlight-link">Regenexx-SD</span> Procedure helps overcome this problem by harvesting <span className="highlight-link">Bone Marrow</span> from an area of the back of the hip that contains a dense population of these important cells and then concentrating those cells before precisely injecting them into the injured area using advanced imaging guidance.
                    </p>
                    
                    <p>
                        The goal of the procedure is to reduce pain and improve function by promoting the body's own ability to heal naturally. This Patented <span className="highlight-link">Bone Marrow Concentrate</span> Protocol can be used for a wide range of orthopedic conditions. Your Regenexx doctor will evaluate your condition and your imaging to determine whether a <span className="highlight-link">bone marrow concentrate</span> or platelet-based treatment is the best option for your orthopedic condition.
                    </p>
                </div>
            </div>
            
            <div className="procedure-card rounded-2xl p-8 relative">
                <div className="mb-8">
                    <div className="text-sm procedure-title mb-2" style={{color: "#00ADBC" }}>Regenexx</div>
                    <div className="element-symbol text-8xl font-bold mb-2 text-white" style={{color: "#00ADBC" }}>Scp</div>
                    <div className="text-sm text-gray-400" style={{color: "#00ADBC" }}>Super Concentrated PRP</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        <span className="highlight-link">Platelet Rich Plasma (PRP)</span> and <span className="highlight-link">Platelet Lysate</span> are Platelet procedures that contain healing <span className="highlight-link">growth factors</span> from your own blood that promote your body's natural ability to repair itself.
                    </p>
                    
                    <p>
                        The use of <span className="highlight-link">PRP</span> to treat joint, tendon, ligament, and muscle injuries is becoming well known, thanks to exposure from professional athletes. Platelet injections have a stimulating effect on the repair cells within the targeted area, making those cells work harder to perform their natural job of healing the body. Like all Regenexx procedures, Regenexx <span className="highlight-link">SCP</span> procedures are performed with high-level imaging guidance to ensure the most accurate placements of cells into the desired area.
                    </p>
                    
                    <p>
                        Our Advanced Platelet Procedures are more concentrated and purer than <span className="highlight-link">PRP</span> created by the automated machines used at most <span className="highlight-link">regenerative medicine</span> clinics, increasing the ability to stimulate the body's natural healing response. Platelet procedures are commonly used for soft tissue injuries, mild arthritis, spine conditions, and around nerves.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
    <Patientstories />
    <Disclaimer />
    <Footer/>
    </>
  )
}

export default page
