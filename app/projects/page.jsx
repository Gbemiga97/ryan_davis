'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"
import { useState } from "react"
import { TabsContent } from "@radix-ui/react-tabs"


const projectData = [
  {
      image: '/work/3.png',
      category: 'react js',
      name: 'Nexa Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/4.png',
      category: 'react js',
      name: 'Solistice Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/2.png',
      category: 'next js',
      name: 'Lumina Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/1.png',
      category: 'next js',
      name: 'Evolve Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/3.png',
      category: 'react js',
      name: 'Ignite Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/4.png',
      category: 'react js',
      name: 'Envision Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/1.png',
      category: 'fullstack',
      name: 'Serenity Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  },
  {
      image: '/work/3.png',
      category: 'fullstack',
      name: 'Zenith Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.',
      link: '/',
      github: '/'
  }
]

const uniqueCategories = ['all projects', 
...new Set(projectData.map((item) => item.category))]



const Projects = () => {

const [categories, setCategories] = useState(uniqueCategories)
const [category, setCategory] = useState('all projects')

const filteredProjects = projectData.filter(project => {
  //if category is all projects return all projects, else filter by category
  return category === 'all projects'
  ? project
  : project.category === category
})

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category}
        className="mb-24 xl:mb-48"
        >
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12
          mx-auto md:border dark:border-none'>
            {
              categories.map((category, i) => (
                <TabsTrigger value={category} key={i} 
                className='capitalize w-[162px] md:w-auto'
                onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))
            }
          </TabsList>
          {/* tabs content */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-lg xl:mt-8">
            {
              filteredProjects.map((project, i) => (
                <TabsContent value={category} >
                  <ProjectCard project={project} key={i} />
                </TabsContent>
              ))
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects