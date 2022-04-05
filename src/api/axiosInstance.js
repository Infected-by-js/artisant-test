import axios from 'axios';
import { baseURL } from './endpoints';

export default new axios.create({ baseURL, timeout: 15_000 });
