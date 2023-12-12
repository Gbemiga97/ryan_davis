import Form from "@/components/Form"
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center text-center xl:text-left items-center xl:items-start">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[1.8rem] h-[2px] bg-primary"/>
            Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">
              Let's Work Together. </h1>
              <p className="subtitle max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint.
              </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark
          bg-contain bg-top bg-no-repeat " />
        </div>
        {/* info, text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg mx-auto xl:mx-0">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <p>youremail@gmail.com</p>
            </div>
             {/* address */}
             <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary" />
              <p>8420 pine Avenue, Meadowville MC 842</p>
            </div>
             {/* mail */}
             <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <p>+44 123 546 7890</p>
            </div>
            </div>
            <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact