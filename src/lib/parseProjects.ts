export function parseProjects(projects: any[]) {
  const projectsByYear: any = {}

  projects.forEach((project) => {
    const year = project.date_deploy.split('-')[0]

    if (!projectsByYear[year]) {
      projectsByYear[year] = []
    }

    projectsByYear[year].push(project)
  })

  const result = Object.keys(projectsByYear)
    .sort((a: any, b: any) => b - a)
    .map((year) => ({
      year,
      projects: projectsByYear[year],
    }))

  return result
}
