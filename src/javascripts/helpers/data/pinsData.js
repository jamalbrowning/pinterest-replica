import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      Object.keys(pinObjects).forEach((pinId) => {
        pinObjects[pinId].id = pinId;
        pins.push(pinObjects[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinbyId = (pinId) => axios.get(`${baseUrl}/pins/${pinId}.json`);
const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);
const addPin = (newPinObj) => axios.post(`${baseUrl}/pins.json`, newPinObj);
const editPin = (pinId, editedPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, editedPin);
export default {
  getPinsByBoardId,
  deletePin,
  addPin,
  editPin,
  getPinbyId,
};
