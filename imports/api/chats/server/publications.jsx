import { Meteor } from "meteor/meteor";
import { Chats } from "../chats";
import { Posts} from '../posts';



Meteor.publish('chats', function chatfunction(){
    return Chats.find({})

})


Meteor.publish('posts', function postsfunction(){
    return Posts.find({})
})

Meteor.publish('users', function postsfunction(){
    return users.userId()
})




