const postData = (user, score) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QF2juezRIUxvtbobb8bW/scores/', {
        method: 'POST',
        body: JSON.stringify({ 
            "user": user,
            "score": score
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then((response) => response.json())
}

export {postData};