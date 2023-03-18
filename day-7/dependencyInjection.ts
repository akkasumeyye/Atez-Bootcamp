
function getAnimals (id) {
    fetch('http://localhost:8080/animals' + id)
    .then(response => response.json())
    .then(data => data.result[0])
}

getAnimals(fetch, 123) 

// Javascript Decorators. @params, @Constructor, @Components (Arastirma konusu)

// Mocha Testing Library. (arastirma konusu Testing Libraries Jest, Mocha and Coverage)

describe('getAnimals', ()=> {
    it ('Calls fetch with correct url', () => {
        const mockFetch = url => {
            assert(urrl === 'http://localhost:8080/animals');
            return new Promise(function(resolve))
        }
    })
    it ('parses the data of fetch correctly', () => {
        //
    });
})

// express arastirma konusu
// openapi standartları arastırma konusu
// loopback docs incele