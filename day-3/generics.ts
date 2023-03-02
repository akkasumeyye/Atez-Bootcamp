// type Animal = {
//     type: string;
//     age: number;
//     sound: (param : any) => void;
// }

// type Sound = {
//     soundType : string;
// }


// function createAnimalSound (snd : Animal) {
//     snd.sound(sd.soundType);
//     return `my sound is ${snd}`
// }

// const sd: Sound = {
//     soundType: 'meow'
// }

type Job = {
    name: string;
    state: string;
    start: () => void;
}


type JobRun<T extends Job> = {
    job: T;
    state: string;
    onComplete: (cb:(job:T)=> void) => void;
}

type SendEmail = Job & {
    recipentEmail: string;
    subject: string;
}

function enquesueJob<T extends Job> (job: T) : JobRun<T> {
    //logic
      return {
        job,
        state:'queue',
        onComplete: (cb:(job:T)=> void) => cb(job),
      }
}

const j: SendEmail = {
    recipentEmail: 'abc@abc.com',
    subject:'ahsjssl',
    name: 'SendEmail',
    state:'started',
    start:() => console.log('Started'),
}

const run = enquesueJob(j);

run.onComplete((job)=> {
    job
})