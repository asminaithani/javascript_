//const requestURL = 'https://api.github.com/users/asminaithani'
// const xhr = new XMLHttpRequest();

// xhr.open('GET', requestURL)
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText)
//         console.log(data.followers);
//     }
// }
// xhr.send();

const requestURL = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        const card = document.getElementById('profile-card');
        const img = document.createElement('img');
        img.src =data.avatar_url;
        img.alt = 'Avatar';
        img.className = 'avatar';

        const followers = document.createElement('p');
        followers.textContent = `Followers: ${data.followers}`;
        followers.className = 'followers';

        card.appendChild(img);
        card.appendChild(followers);
    }
}
xhr.send();
