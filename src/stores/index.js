import CatsStore from './CatsStore';
import SlingAcademyStore from './SlingAcademyStore';
import UserStore from './UserStore';

const catsStore = new CatsStore();
const slingAcademyStore = new SlingAcademyStore();
const userStore = new UserStore();

export {catsStore, slingAcademyStore, userStore};
