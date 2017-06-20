import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import {Tasks} from './tasks.js';
import {assert} from 'meteor/practicalmeteor:chai';

if(Meteor.isServer){
    describe('Tasks', ()=>{
        describe('Methods',()=>{
            const userId = Random.id();
            let taskId;

            beforeEach(()=>{
                Tasks.remove({});
                taskId = Tasks.insert({
                    text : 'text task',
                    createdAt : new Date(),
                    owner : userId,
                    username : 'tmeasday',
                    private: true,
                });
            });

            it('can delete owned task',()=>{
                //Find the internal implementation of the task Method
                //so we can test it in isolation
                const deleteTask = Meteor.server.method_handlers['tasks.remove'];
                
                //set up a fake method ivocation that looks like what the method expects
                const invocation = {userId};

                //run the method with 'this' set to the fake invocation
                deleteTask.apply(invocation, [taskId]);

                //verfify that the method does what we expected
                assert.equal(Tasks.find().count(), 0);

            });
        });
    });
}