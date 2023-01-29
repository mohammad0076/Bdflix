export const setAuthToken = user => {
    const currentUser = {
<<<<<<< HEAD
        email: user.email,

=======
        email: user?.email,
>>>>>>> a0de3d9c94e654ae8b29b2cc8eaa90dc7ab464d5
    }

    //save user in db & get token
    fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/user/${user?.email}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //save token in localstorage
            localStorage.setItem('aircnc-token', data.token)
        })
}