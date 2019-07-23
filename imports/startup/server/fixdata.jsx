import { Meteor } from 'meteor/meteor';
import { Chats } from '../../api/chats/chats';
import _ from 'lodash';
import faker from 'faker';
import Posts from '../../api/posts/posts';
Meteor.startup(() => {
	// const ss = _.times(20, () => ({
	// 	title: faker.company.sentences,
	// 	description: faker.lorem.paragraphs(),
	// 	content: faker.lorem.paragraphs()
	// }));

	// console.log(ss);

	// Posts.insert(ss);
});

// 텅빈 화면 방지용
