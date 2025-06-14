import { PROJECTS, type Project } from 'src/mockups/projects.mockup'
import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'

interface ProjectCard {
  title: string
  image: string
  link_github: string
  slug: string
  id: string
  description: string
  technologies: {
    title: string
    link: string
  }[]
}

export async function getHomeProjectsCard(): Promise<ProjectCard[]> {
  const newProjects = PROJECTS.map((project: Project) => {
    const technologies = project.technology_project.map((tech: any) => {
      return {
        title: tech.title_technology_project,
        link: tech.link_page_technology_project,
      }
    })

    const publication = PUBLICATIONS.find(
      ({ title }: Publication) => title === project.publication
    )

    return {
      title: project.title_project,
      image: project.image_project,
      link_github: project.link_github,
      slug: publication!.slug,
      id: project.slug,
      description: project.description_project,
      technologies: technologies,
    }
  })

  return await Promise.resolve(newProjects)
}

// import { query } from './strapi'

// const { STRAPI_HOST_IMG } = import.meta.env

// export function getHomeProjects() {
//   return query(
//     'projects?populate=image_project&populate=technology_project&populate=members&populate=publication'
//   ).then((res) => {
//     const projects = res.data.map((project: any) => {
//       const technologies = project.technology_project.map((tech: any) => {
//         return {
//           title: tech.title_technology_project,
//           link: tech.link_page_technology_project,
//         }
//       })

//       const developers = project.members.map((member: any) => {
//         return {
//           name: member.name_member,
//         }
//       })

//       const image_project = `${STRAPI_HOST_IMG}${project.image_project?.url}`

//       return {
//         title: project.title_project,
//         image: image_project,
//         link_github: project.link_github,
//         slug: project?.publication?.slug,
//         id: project.slug,
//         description: project.description_project,
//         technologies: technologies,
//         content: project.article_content_project,
//         author: project.person_name_article_publisher_project,
//         developers: developers,
//         date_deploy: project.date_deploy_project,
//       }
//     })

//     return projects
//   })
// }
