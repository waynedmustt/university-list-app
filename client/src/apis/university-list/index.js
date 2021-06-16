import axios from 'axios';
import {coreService} from '../../core/service';

export const searchUniversity = async (param) => {
    let univApiUrl = coreService.getConfig('univApiUrl');
    if (param) univApiUrl = univApiUrl + '?' + param
    return axios.get(`${univApiUrl}`)
    .then((res) => {return res})
    .catch((err) => {return err})
}