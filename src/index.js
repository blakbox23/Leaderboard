import './style.css';
import { getFromApi } from './getdata.js';
import { uilist } from './interfaceList.js';
import { postData } from './postdata.js';

const form = document.querySelector('#score-form');
const refreshBtn = document.querySelector('#refresh-btn');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user = document.querySelector('#name');
    const score = document.querySelector('#score');
    postData(user.value, score.value);
    user.value = '';
    score.value = '';
});

refreshBtn.addEventListener('click', async () => {
    uilist(await getFromApi())
})
