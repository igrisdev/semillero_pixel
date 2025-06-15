import type { Event } from 'src/mockups/events.mockup'

export interface PublicationBySlug {
  title: string
  author: string
  date: string
  image_author: string
  content: string
  types: any[]
  work_done_bies: any[]
}

export interface PublicationCard {
  title: string
  author: string
  date: string
  description: string
  image_author: string
  slug: string
  types: {
    title: string
    description: string
    publications: string[]
    color_type: string
  }[]
}

export interface ProjectCard {
  title: string
  image: string
  link_github: string
  slug: string
  id: string
  description: string
  technologies: any[]
  content: string
  author: string
  developers: any[]
  date_deploy: string
}

export interface Hero {
  title_hero: string
  description_hero: string
  image_hero: string
}

export interface EventCard {
  year: string
  title: string[]
  infoEvent: {
    image: string[]
    slug: string
  }[]
}

export interface Member {
  image: any
  name: string
  orcid: string
  rol: string
  career: string
  state: boolean
  date_init: string
  date_end: string
  social_media: any[]
}

export interface AboutUs {
  title_about_us: string
  description_about_us: string
}
