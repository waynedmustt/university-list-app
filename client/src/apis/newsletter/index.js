import axios from 'axios';
import {coreService} from '../../core/service';

export const saveNewsLetter = async (users) => {
    const apiUrl = coreService.getConfig('apiUrl');
    return axios.post(`${apiUrl}`, users)
    .then((res) => {return res})
    .catch((err) => {return err})
}