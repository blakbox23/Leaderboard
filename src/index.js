import './style.css';
import { getFromApi } from './getdata.js';
import { uilist } from './interfaceList.js';


const refreshBtn = document.querySelector('#refresh-btn');

refreshBtn.addEventListener('click', async () => {
    uilist(await getFromApi())
})
