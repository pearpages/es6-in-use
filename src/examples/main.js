import { sumTwo, sumThree as addThreeNumbers, sumFour } from './modules/addition.js';
import * as users from './modules/data.js'

// understandingArrowFunctions().someArrowFucntionsExamples();
// understandingArrowFunctions().nestedFunctionsAccessingThis();
// letVariables().letScopeExample();
// letVariables().forExampleVar();
// letVariables().forExampleLet();
// defaultValuesForFunctions().simpleExample();
// defaultValuesForFunctions().functionAsAParameter();
// constDeclarations().understandingConst();
// propertiesShorthands().example();
// objectEnhancements().example();
// spreadOperator().spreadAndArrays();
// spreadOperator().usingItWithFunctions();
// stringTemplates().withExpressions();
// stringTemplates().withFormat();
// destructuringAssignment().example1();
// destructuringAssignment().example2();
// destructuringAssignment().withArrays();
// destructuringAssignment().example3();
// modulesImportExport().example1();
// convertObjectToArray().example1();
// promises().example1();
// generators().example1();
// mapsAndWeakMaps().maps();
// mapsAndWeakMaps().weakMaps();
// objectDestructuringWithRequiredValues().example();
restArguments().example();

function understandingArrowFunctions() {

    return {
        someArrowFucntionsExamples,
        nestedFunctionsAccessingThis
    };

    function someArrowFucntionsExamples() {
        let greeting = (message, name) => {
            return message + ': ' + name;
        }

        console.log(greeting('hello world', 'Pere'));

        let greetingOneLine = (message, name) => message + ': ' + name;

        console.log(greeting('hello world', 'Pere'));

        let message = message => console.log(message);

        message('hello world: Pere');
    }

    function nestedFunctionsAccessingThis() {
        // thx to arrow functions we dont have the problem of this that scope trouble anymore when having nested functions

        var test = {
            object: 'Car',
            print: function() {
                this.sayHello();
                console.log(this.object); // thx to prototypical inheritance
            },
            sayHello: function() {
                console.log('Hello!!!');
            }
        }

        var deliveryBoy = {
            name: 'Pere',
            handleMessage: function(message, handler) {
                handler(message);
            },
            receive: function() {
                this.handleMessage('Hello ', (message) => console.log(message + this.name))
            }
        }

        test.print();
        deliveryBoy.receive();
    }

}

function letVariables() {

    return {
        letScopeExample,
        forExampleVar,
        forExampleLet
    };

    function letScopeExample() {
        // let allows you to declare variables that are limited in scope to the block

        let name = 'Pere';

        {
            let name = 'Joan';
        }

        console.log(name);

        var lastName = 'Pages';

        {
            var lastName = 'Amell';
        }

        console.log('Amell');

    }

    function forExampleVar() {
        var res = [];

        for (var i = 0; i < 10; i++) {
            console.log(i); // 0,1,2,3,4,5,6,7,8,9
            res.push(function() {
                console.log(i); // not yet executed
            });
        }

        console.log(i); // now i is 10
        res.forEach((v) => v()); // so everytime we console log i will be 10
    }

    function forExampleLet() {
        let res = [];

        for (let i = 0; i < 10; i++) {
            res.push(function() { console.log(i) });
        }

        // console.log(i); // not defined, because i lives only inside the for
        res.forEach((v) => v());
    }

}

function defaultValuesForFunctions() {
    return {
        simpleExample,
        functionAsAParameter
    }

    function simpleExample() {

        greeting('Hello World');
        greeting('Hello', 'Joan');

        function greeting(greeting, name = 'Pere') {
            console.log(greeting + ': ' + name);
        }

    }

    function functionAsAParameter() {

        receive();

        function receive(complete = () => console.log('Hello Pere')) {
            complete();
        }
    }
}

function constDeclarations() {

    return {
        understandingConst: understandingConst
    }

    // it is a general convention to put constants in capital letters:
    // var VALUE = 'hello world';

    function understandingConst() {
        // const in fact is just a const reference
        // const works in a block scope like let
        const VALUE = 1;
        const VALUES = {
            var1: 1,
            var2: 2,
            var3: 3
        }

        // try {
        //     VALUE = 2; // Assignment to constant variable.
        // } catch (err) {
        //     console.log(err.message);
        // }

        // try {
        //     VALUES = {}; // Assignment to constant variable.
        // } catch (err) {
        //     console.log(err.message);
        // }

        VALUES.var1 = 99; // OK.
        console.log(VALUES);
    }
}

function propertiesShorthands() {

    return {
        example: example
    }

    function example() {
        let firstName = 'Pere';
        let lastName = 'Pages';

        let person = { firstName, lastName };

        let mascot = 'Moose';
        let team = { person, mascot };
        console.log(team);
    }
}

function objectEnhancements() {

    return {
        example
    }

    function example() {

        let color = 'red';
        let speed = 10;
        let drive = 'go';

        var car = {
            color,
            speed,
            [drive]: () => console.log('vroom')
        }

        car.go();
        console.log(car);
    }
}

function spreadOperator() {

    return {
        spreadAndArrays,
        usingItWithFunctions
    };

    function spreadAndArrays() {
        let values1 = [1, 2, 3, 4];
        let values2 = [5, 6, 7, 8];
        let final = values1.slice();

        final.push(...values2);
        console.log(values1);
        console.log(values2);
        console.log(final);

    }

    function usingItWithFunctions() {

        let values1 = [1, 2, 3];
        let values2 = [4, 5, 6];

        function sumValues(a, b, c) {
            return a + b + c;
        }

        console.log(sumValues(...values1));
        console.log(sumValues(...values2));
    }
}

function stringTemplates() {

    return {
        withExpressions,
        withFormat
    }

    function withExpressions() {

        function showExpression(x, y) {
            console.log(`${x} + ${y} = ${x + y}`)
        }

        showExpression(2, 3);
    }

    function withFormat() {
        console.log(`one line
        another line
        another another line`);
    }
}

function destructuringAssignment() {

    return {
        example1,
        example2,
        withArrays,
        example3
    }

    function example1() {
        let object = {
            firstName: 'Pere',
            lastName: 'Pages',
            married: false,
            sex: 'man',
            birthYear: '1982'
        };

        let {firstName, sex} = object;
        console.log(firstName, sex);
    }

    function example2() {

        function getCar() {
            return {
                doors: 3,
                drivers: 1,
                engine: 'gasoline',
                horsePower: '22Ocv'
            }
        }

        let {doors, engine} = getCar();
        let {doors: aliasForDoors, engine: aliasForEngine} = getCar();

        console.log(doors, engine);
        console.log(aliasForDoors, aliasForEngine);
    }

    function withArrays() {

        let values = ['white', 'yellow', 'orange', 'red', 'green', 'blue'];

        let [first, , , , fifth] = values;
        console.log(first, fifth); // white, green
    }

    function example3() {
        let values = [
            {
                a: 'a',
                b: 'b',
                c: 'c',
                d: 'd'
            },
            {
                a: 'e',
                b: 'f',
                c: 'g',
                d: 'h'
            },
            {
                a: 'i',
                b: 'j',
                c: 'k',
                d: 'l'
            }
        ];

        let [, two] = values;

        log(two);

        function log({b}) {
            console.log(b);
        }
    }
}

function modulesImportExport() {

    return {
        example1
    }

    function example1() {

        // check the import statement at the top of the file
        // check the addition.js to see the export
        console.log('2+5', sumTwo(2, 5));
        console.log('1+5+10', addThreeNumbers(1, 5, 10));
        console.log('9+4+8+12', sumFour(9, 4, 8, 12));
        console.log(users.users, users.codes);
    }

}

function convertObjectToArray() {
    return {
        example1
    }

    function example1() {

        let string = 'hello world';
        let array = Array.from(string);

        array.forEach((v) => console.log(v));
        let filtered = array.filter((v) => v === 'o');
        console.log(filtered);
    }
}

function promises() {
    return {
        example1
    }

    function example1() {
        let d = new Promise((resolve, reject) => {
            if (Math.random() > 0.49) {
                resolve('hello world');
            } else {
                reject('no bueno');
            }
        });

        d.then((data) => console.log(data), (err) => console.log(err));
    }
}

function generators() {
    return {
        example1
    }

    function example1() {

        let graph = graphGenerator()
        console.log(graph.next());
        console.log(graph.next());
        console.log(graph.next());
        console.log(graph.next());

        function* graphGenerator() {
            let x = 0;
            let y = 0;

            while (true) {
                yield { x: x, y: y }
                x += 2;
                y += 2;
            }
        }
    }
}

function mapsAndWeakMaps() {

    return {
        maps,
        weakMaps
    }

    function maps() {
        // set()
        // get()
        // size
        // clear()
        // has()

        // Iterators
        // keys()
        // entries()
        // values()

        var myMap = new Map();

        myMap.set('foo', 'bar');
        myMap.set('hello', 'world');
        console.log(myMap);
        console.log(myMap.keys()); // {'foo','hello'}
        console.log(myMap.values()); // {'bar','world'}
        console.log(myMap.entries()); // { ['foo','bar'], ['hello','world']}
        console.log(myMap.size); // 2
        console.log(myMap.has('foo')); // true
        myMap.clear();
        console.log(myMap); // {}

    }

    function weakMaps() {
        // no references are kept
        // http://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
    }
}

function objectDestructuringWithRequiredValues() {

    return {
        example
    }

    function example() {

        ajax({url: 'hello.com', success: () => console.log('success') });

        function ajax({
            type = "get",
            url = requiredParameter("url"),
            data = {},
            success = requiredParameter("success"),
            error = () => { },
            isAsync = true
        }) {
            console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
        }
    }
}

function restArguments() {

    return {
        example
    }

    function example() {

        myFunction(1,2,3,4,5);
        
        function myFunction (...items) {
            console.log(items)
        }
    }
}