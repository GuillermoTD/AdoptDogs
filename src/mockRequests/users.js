export const users = [
    {username:'test',password:'test123',fulName:'Prueba Test'},
    {username:'test',password:'12345',fulName:'Pedro Stevens'},
    {username:'test',password:'12345',fulName:'Maria Mendoza'},
    {username:'test',password:'john123',fulName:'John Doe'}
]



export const login = (username, password)=>{
    const foundUsers = users.find(user => user.username === username && user.password === password)
    return foundUsers || {error: "No hemos encontrado su usuario"}
    
}

export default {
    login,
    users
}