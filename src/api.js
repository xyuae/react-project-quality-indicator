import axios from 'axios';
//import config from './config/config';

export const fetchProject = projectName => {
  return axios.get(`/api/projects/name/${projectName}`)
							.then(res => res.data);
};
