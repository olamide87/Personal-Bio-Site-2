import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectsData';
import projectCard from '../projectCard/projectCard';

const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += projectCard.buildProjectCard(project);
      });
      domString += '</div>';
      utils.printToDom('projects', domString);
    })
    .catch((err) => console.error(err));
};

export default { printProjects };
