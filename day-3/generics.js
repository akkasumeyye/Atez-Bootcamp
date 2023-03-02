// type Animal = {
//     type: string;
//     age: number;
//     sound: (param : any) => void;
// }
function enquesueJob(job) {
    //logic
    return {
        job: job,
        state: 'queue',
        onComplete: function (cb) { return cb(job); }
    };
}
var j = {
    recipentEmail: 'abc@abc.com',
    subject: 'ahsjssl',
    name: 'SenEmail',
    state: 'started',
    start: function () { return console.log('Started'); }
};
var run = enquesueJob(j);
run.onComplete(function (job) {
    job;
});
