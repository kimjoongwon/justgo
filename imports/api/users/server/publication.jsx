import {Meteor} from 'meteor/meteor';


Meteor.publish('userlog', function userlog(){
    return Meteor.users.find({
        
    })
})