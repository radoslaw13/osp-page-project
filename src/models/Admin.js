import Parse from 'parse';


export default class Admin {


   static currentUser = () => {
       
    return Parse.User.currentAsync()
        .then((parseUser) => {
            if (!parseUser) return null
            return parseUser.getUsername()
        })
    }

    static currentUserId = () => {
        return Parse.User.current().id
    }

    static login = (userName, password) => {
        return Parse.User.logIn(userName, password) 
    }

   static logOut = () => {
        return Parse.User.logOut()
   }
}