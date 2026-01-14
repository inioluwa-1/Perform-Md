import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import HeroForm from '@/components/Heroform';
import Medicalaccordion from '@/components/Medicalaccordion';
import Navbar from '@/components/Navbar';
import Patientstories from '@/components/Patientstories';
import Testimonials from '@/components/Testimonials';
const Page = () => {
  return (
    <>
      <Navbar />

      <div
        className="relative min-h-[90vh] md:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url("/spine.svg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />

        <div>
          <HeroForm />
        </div>
      </div>

        <section className="bg-[#1f2937] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Regenexx® Non-Surgical Procedures for Spine-Related Conditions.
          </h2>
          <p className="mb-4 text-gray-300">
            The board-certified, highly skilled physicians who are part of the Regenexx Network have a range of regenerative orthopedic procedures developed to help reduce pain, improve function and avoid spine surgery and the damaging side effects of epidural steroid injections. These highly specific, precise image-guided injection procedures use the healing aspects from your own body to promote the body’s natural healing ability in treating bulging or herniated discs, degenerative conditions in the spine, and other back and neck conditions.
          </p>
          <p className="text-gray-300">
            The origin of spine pain is often misidentified which can lead to inappropriate treatment and unnecessary surgery. Being the pioneers of the field of Interventional Orthobiologics, and more than a decade and a half of experience in using these advanced Interventional Orthobiologics procedures for spine pain, our highly-skilled board-certified physicians are able to identify the most treatable sources of pain and select the most appropriate non-surgical minimally-invasive treatment options available.
          </p>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/spinevideo.svg" 
            alt="Video thumbnail"
            className="w-full h-auto rounded"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>

    <Medicalaccordion/>

     <section className="bg-slate-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Regenexx Alternative to Spine Surgery or Steroid Epidural Injections
            </h2>
            <p className="mb-4 text-gray-300">
              A steroid epidural is an injection that places steroid medication around irritated or inflamed nerves in the spine. While they do help patients avoid surgery, epidurals use very high-dose steroids that can cause severe side effects and actually reduce the body's ability to heal.
            </p>
            <p className="text-gray-300">
              Regenexx offers a variety of minimally invasive procedures that deliver ultra-precise signal injections of platelet lysates (or in fewer cases, bone marrow concentrate) where needed, utilizing advanced imaging guidance to ensure precise placement into the injured area.
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/spinevideof6.svg" 
              alt="Video thumbnail"
              className="w-full h-auto rounded"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-80 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

       <Testimonials/>

      <section className="bg-slate-900 text-white px-6 py-12">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
    <div className="lg:w-1/2 flex flex-col items-center">
      <img
        src="/heart.svg"
        alt="Disc Illustration"
        className="w-[350px] h-auto mb-6"
      />
      <div className="w-full">
        <h3 className="text-md font-semibold text-white mb-3">
          Treating Bulging and Herniated Discs
        </h3>
        <p className="text-sm text-gray-300">
          Doctors typically use a combination of physical therapy,
          anti-inflammatory medications, and sometimes steroid epidural
          injections to treat disc injuries. While these approaches may help
          control symptoms, they often do not repair the disc damage itself.
          As a result, patients may continue to experience pain or need
          ongoing treatments. Platelet-based treatments provide a more
          regenerative approach.
        </p>
      </div>
    </div>

    <div className="lg:w-1/2 space-y-10">
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Platelet Treatments for Pain from Bulging or Herniated Discs
        </h2>
        <p className="text-sm text-gray-300 mb-3">
          A <span className="text-white font-semibold">bulging disc</span> is also called a disc protrusion or bulge. This means
          that the outer covering of the disc (annulus) is partially torn or
          damaged and the inner gel is causing the area to bulge. This can put
          pressure on a spinal nerve and cause numbness and tingling (radiculitis).
        </p>
        <p className="text-sm text-gray-300">
          A <span className="text-white font-semibold">herniated disc</span> is also called a disc extrusion, slipped disc,
          or sequestration. This means that the outer covering of the disc
          (annulus) is completely torn or damaged and inner gel is leaking
          out. This can put pressure on a spinal nerve (or the spinal cord)
          and lead to numbness and tingling (radiculitis).
        </p>
      </div>

      <div>
        <h3 className="text-md font-semibold text-white mb-3">
          A Better Option than Steroid Epidurals
        </h3>
        <p className="text-sm text-gray-300">
          A herniated disc is an important first-class steroid medication
          condition and may lead to inflammation in the spine. Many finally
          patients avoid surgery and can provide pain relief without surgery.
          Regenexx Platelet Lysate is a very specific, precise, image-guided
          procedure in which platelets are separated from a standard blood
          sample. It uses natural growth factors from the patient's own body,
          and may help avoid spinal surgery and the high risks of chronic
          steroids.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#29313a] text-white px-6 py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center leading-snug">
      Using Your Body's Own Healing Agents for Degenerative Disc Pain:<br />
      <span className="text-2xl sm:text-3xl font-semibold mb-10 text-center leading-snug">
       Bone Marrow Concentrate and Platelets
      </span>
    </h2>

    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2 w-full">
        <img
          src="/spine256.svg"
          alt="Spine Side View"
          className="w-full h-auto max-w-[400px] mx-auto"
        />
      </div>

      <div className="lg:w-1/2 w-full space-y-3">
      <p className='text-sm text-gray-300 leading-relaxed'>
        Because Regenexx was the first to develop this type of treatment modality, we have the experience and the broad spectrum of procedures that allow for the treatment of all of these conditions. Regenexx procedures provide highly specific, precise image-guided, non-surgical treatment options using the healing agents from your own body for patients suffering from the complications associated with degenerative disc disease. Our highly skilled Physicians carefully target the right procedure to the impacted areas of the spine using precise imaging guidance, so that patients may avoid spinal fusion surgery or frequent high-dose steroid epidural injections and their associated side effects.
      </p>
        <h3 className="text-lg font-semibold text-white">
        Advanced Treatments for Degenerative Discs
        </h3>
        <p>
          Degenerated disc patients tend to lose disc height which can lead to a wide range of complications.
        </p>

      <ul className="list-disc pl-5 marker:text-[#50C3E9] text-white">
  <li>Compressed nerves (stenosis)</li>
  <li>Facet joint overload leading to arthritis</li>
  <li>Lax ligaments that result in overall spinal instability</li>
</ul>



        <p className="text-sm text-gray-300 leading-relaxed">
         Our advanced Interventional Orthobiologic treatment protocol focuses on Platelet and/or Bone Marrow Concentrate from the patient's own body deployed to treat disc movement due to lax ligaments and arthritic facet joints..
        </p>

        <p className='text-sm text-gray-300 leading-relaxed'>
          Each of these critical areas above may benefit from different types of procedures.
        </p>

      </div>
    </div>
  </div>
</section>


    <section className="bg-slate-900 px-6 py-16 text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div className="md:w-1/2 w-full">
      <img
        src="/Frame 7.svg"
        alt="Regenerative Procedure"
        className="w-full h-auto rounded shadow-lg"
      />
    </div>

    <div className="md:w-1/2 w-full space-y-6">
      <h3 className="text-2xl font-semibold leading-snug">
        Advanced Treatments for Torn & Painful Disc
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
      Disc tears are also called annular tears or HIZs (High-Intensity Zones) on MRI images. A patient with a painful and torn disc has “discogenic pain”. The outer covering of the disc can be torn due to injury and painful nerves can grow into the area, leading to low back pain, usually with sitting or activity. In addition, the tear in the disc may lead to noxious chemicals escaping and irritating the spinal nerve, which can lead to sciatica. 
      </p>
    
    </div>

  </div>
</section>

<section className="bg-slate-900 px-6 py-16 text-white">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
    <div className="lg:w-1/2 w-full space-y-6">
      <h3 className="text-2xl font-semibold leading-snug">
        Patients with this type of disc damage and pain may benefit from a Regenexx Bone Marrow Concentrate injection procedure
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        This highly specialized, precise, image-guided non-surgical procedure uses cells isolated from the patient's own bone marrow. 
        The bone marrow is collected using a special needle and advanced imaging guidance during an in-office procedure with your Regenexx Physician. 
        The harvesting procedure is well tolerated by patients, and many report experiencing no pain.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed">
        After collection, the bone marrow is centrifuged to concentrate the healing cells, and unneeded cells are removed. 
        These cells, along with a preparation of concentrated blood platelets, are injected the same day into the damaged disc 
        using precise, advanced imaging guidance.
      </p>
    </div>

    <div className="lg:w-1/2 w-full flex justify-center">
      <img
        src="/p 1.svg"
        alt="Disc Detail"
        className="w-[450px] h-auto rounded "
      />
    </div>

  </div>
</section>

   <div className="bg-slate-900  text-white min-h-screen py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">
        How Regenexx Procedures Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="border-l-2 border-[#00C2B8] p-6 rounded">
         <div className="mb-6">
      <div className="border-2 border-[#00C2B8] p-6 w-55 h-55 flex flex-col justify-between">
        <div className="text-sm text-[#00C2B8]">Regenexx</div>
        <div className="text-6xl font-bold text-[#00C2B8]">Scp</div>
        <div className="text-sm text-[#00C2B8]">Bone marrow Concentrate</div>
      </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            <span className="text-[#0595a2] font-semibold">Regenexx-SD is Bone Marrow Concentrate.</span> These repair cells from your own body live inside all of us in various tissues, poised to leap into action to repair damage as it occurs. As we age or have big injuries, we may not be able to recruit enough of these cells to the site to fully repair the area.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            The Regenexx-SD Procedure helps overcome this problem by harvesting Bone Marrow from an area of the back of the hip that contains a dense population of these important cells and then concentrating those cells before precisely injecting them into the injured area using advanced imaging guidance.
          </p>
          <p className="text-sm leading-relaxed">
            The goal of the procedure is to reduce pain and improve function by promoting the body's own ability to heal naturally. This Patented Bone Marrow Concentrate Protocol can be used for a wide range of orthopedic conditions. Your Regenexx doctor will evaluate your condition and your imaging to determine whether a bone marrow concentrate or a platelet-based treatment is the best option for your orthopedic condition.
          </p>
        </div>

        <div className="border-l-2 border-[#0595a2] p-6 rounded">
          <div className="mb-6">
      <div className="border-2 border-[#0595a2] p-6 w-55 h-55 flex flex-col justify-between">
        <div className="text-sm text-[#0595a2]">Regenexx</div>
        <div className="text-6xl font-bold text-[#00C2B8]">Scp</div>
        <div className="text-sm text-[#0595a2]">Super Concentrated PRP</div>
      </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Platelet Rich Plasma <span className="text-[#0595a2] font-semibold">(PRP)</span>  and <span className="text-[#0595a2] font-semibold">Platelet Lysate</span> are Platelet procedures that contain healing growth factors from your own blood that promote your body's natural ability to repair itself.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            The use of PRP to treat joint, tendon, ligament, and muscle injuries is becoming well known, thanks to exposure from professional athletes. Platelet injection has a stimulatory effect on the repair cells within the targeted area, making those cells work harder to perform their natural job of healing the body. Like all Regenexx procedures, Regenexx SCP procedures are performed with high-level imaging guidance to ensure the most accurate placement of cells into the desired area.
          </p>
          <p className="text-sm leading-relaxed">
            Our Advanced Platelet Procedures are more concentrated and purer than PRP created by the automated machines used at most regenerative medicine clinics, increasing its ability to stimulate the body's natural healing response. Platelet procedures are commonly used for soft tissue injuries, mild arthritis, spine conditions, and around nerves.
          </p>
        </div>
      </div>
    </div>

    <Patientstories/>
    <Disclaimer/>
    <Footer/>
    

  







    </>
  );
};

export default Page;
