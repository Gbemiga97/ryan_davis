import DevImg from "./DevImg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Image from "next/image"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ryan Davis'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+012 345 6789'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'youremail@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 2nd Mar, 1997'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master on Computer Science'
    },
    {
        icon: <User2 size={20} />,
        text: '321 Blue Avenue, NY USA'
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor of Science',
                years: '2015 - 2018'
            },
            {
                university: 'Another University',
                qualification: 'Master of Arts',
                years: '2019 - 2021'
            },
            {
                university: 'Yet Another University',
                qualification: 'Ph.D in Computer',
                years: '2021 - 2025'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc',
               role: 'Software Engineer',
                years: '2018 - 2020'
            },
            {
                company: 'XYZ Corporation',
               role: 'Senior Developer',
                years: '2020 - 2022'
            },
            {
                company: 'Tech Innovators',
               role: 'Lead Developer',
                years: '2022 - Present'
            },
        ]
    }
]

const skillsData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Javascript, PHP'
            },
            {
                name: 'Back-end Development'
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/notion.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            }
        ]
    }
]

const About = () => {

    const  getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative ">
                        <DevImg 
                        containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                        imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications' >Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent  value='personal'>
                                   <div className="text-center xl:text-left ">
                                    <h3 className="h3 mb-4">
                                        Unmatched Services Quality for Over 10 Years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        I specialize in crafting intuitive websites with cutting-edge
                                        technology, delivery dynamic and engaging use experience. 
                                    </p>
                                    {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {
                                            infoData.map(({icon, text}, i) => (
                                                <div key={i}
                                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                >
                                                    <div className="text-primary">
                                                        {icon}</div>
                                                    <p>{text}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/* languages */}
                                    <div className="flex flex-col gap-y-2 ">
                                        <p className="text-primary">
                                            Language Skill</p>
                                        <div className="border-b border-border" />
                                        <p>English, French, Spanish, Italian</p>
                                    </div>
                                    </div> 
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey</h3>
                                            {/* experience & education wrapper */}
                                            <div className="grid md:grid-cols-2 gap-y-8 place-items-center xl:place-items-start">
                                                {/* experience */}
                                                <div className="flex flex-col gap-y-6 ">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <Briefcase />
                                                        <h4 className="capitalize font-medium">
                                                            {
                                                                getData(qualificationData, 'experience').title
                                                            }
                                                        </h4>
                                                    </div>
                                                    {/* list */}
                                                    <div className="flex flex-col gap-y-8">
                                                        {
                                                            getData(qualificationData, 'experience').data.map(({company, role, years}, i) => (
                                                                <div key={i}
                                                                className="flex gap-x-8 group "
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                        transition-all duration-500 ">

                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="fon-semibold text-xl leading-none mb-2">
                                                                            {company}</p>
                                                                        <p className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {role}</p>
                                                                        <p className="text-base font-medium">
                                                                            {years}</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                {/* education */}
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <GraduationCap size={28} />
                                                        <h4 className="capitalize font-medium">
                                                            {
                                                                getData(qualificationData, 'education').title
                                                            }
                                                        </h4>
                                                    </div>
                                                    {/* list */}
                                                    <div className="flex flex-col gap-y-8">
                                                        {
                                                            getData(qualificationData, 'education').data.map(({university, qualification, years}, i) => (
                                                                <div key={i}
                                                                className="flex gap-x-8 group "
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                        transition-all duration-500 ">

                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="fon-semibold text-xl leading-none mb-2">
                                                                            {university}</p>
                                                                        <p className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {qualification}</p>
                                                                        <p className="text-base font-medium">
                                                                            {years}</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">
                                            What I Use Everyday</h3>
                                            {/* skills */}
                                            <div className="mb-16">
                                                <h4 className="text-xl font-semibold mb-2">
                                                    Skills</h4>
                                                    <div className="border-b border-border mb-4"/>
                                                    {/* skills list */}
                                                    <div>
                                                        {
                                                            getData(skillsData, 'skills').data.map(({name}, i) => (
                                                                <div key={i} className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                                                                     <p className="font-medium">
                                                                        {name}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                            </div>
                                            {/* tools */}
                                            <div>
                                                <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                                    Tools</h4>
                                                    <div className="border-b border-border mb-4"/>
                                                   {/* tool list */}
                                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                                        {
                                                            getData(skillsData, 'tools').data.map(({imgPath}, i) => (
                                                                <div key={i}>
                                                                    <Image 
                                                                    src={imgPath}
                                                                    width={48}
                                                                    height={48}
                                                                    alt=''
                                                                    priority
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                            </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default About