'use server'

async function Login(formdata) {
    const username = formdata.get('username')
    const password = formdata.get('password')

    let success = false

    try {
        const { data } = await axios.post('', {
            username,
            password
        })

        cookies().set('token', data.token);
        success = true;

    } catch (error) {
        console.log(error?.response?.data || error.message)
    }

    if (success) {
        redirect('/')
    }
}

async function Logout() {
    cookies().delete('token')
    redirect('/')
}