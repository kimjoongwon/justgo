import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


class ChatsCollection extends Mongo.Collection {}

export const Chats = new ChatsCollection('Chats');

//  위아래 합쳐서 Chats = Mongo.Collection('Chats') 도 가능. 근데 메소드 추가하려면 위의 방법

Chats.schema = new SimpleSchema({
	name: {type:String},
	messages: { type: String }
});
// chats 스키마 만들기

Chats.attachSchema(Chats.schema)
// 만든 스키마 연결

// 로그인 이메일과 메세지를 어떻게 연결시킬지 고민..









// // 퍼블릭한 필드 설정

// Chats.helper({});
// //  쳇 관련 함수 설정을 위한 함수인데 안 씀. 시간 

