import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => axios.get(`${baseUrl}/boards.json`);

export default { getBoards };
