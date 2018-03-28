import axios from 'axios';
import _ from 'lodash';
import { CONFIG } from '../config/index';

export default function fireAjax (method, URL, data, api) {
    if(method === 'POST') {
         let headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios.post( URL, data, headers );
    } else if (method === 'GET') {
        
    }
}
