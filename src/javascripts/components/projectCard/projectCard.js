const buildProjectCard = (project) => {
  const techUsed = project.technologiesUsed.split(', ');
  let domString = '';
  domString += '<div class="col-md-6 mb-5 d-flex justify-content-center">';
  domString += '<div class="card project-card project-details mx-auto">';
  domString += `<img class="project-screenshot card-img-top" src=${project.screenshot} alt="project-screenshot">`;
  domString += '<div class="card-body">';
  domString += `<h4 class="py-1">${project.title}</h4>`;
  domString += `<p>${project.description}</p>`;
  domString += '<div class="project-btns">';
  domString += `<button class="project-demo-btn my-button grow mt-1 mx-3"><a href=${project.url} target="_blank">Demo</a></button>`;
  domString += `<button class="project-github-btn my-button grow mt-1 mx-3"><a href=${project.githubUrl} target="_blank">GitHub</a></button>`;
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card-footer tech-used">';
  domString += '<h6>TECH USED</h6>';
  domString += '<ul>';
  techUsed.forEach((tech) => {
    domString += `<li>${tech}</li>`;
  });
  domString += '</ul>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildProjectCard };
