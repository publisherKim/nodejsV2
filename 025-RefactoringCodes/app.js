const json = require('./json-exercies/json');
const yargs = require('yargs');
const geolocation = require('./geolocation');
const argv = yargs
    .command('add', 'Add a new zsl', {
        name: {
            describe: 'Name of zsl to add.',
            demand: true,
            alias: 'n'
        },
        tel: {
            describe: 'telephone number of zsl to add.',
            demand: true,
            alias: 't'
        }
    })
    .command('getAll', 'list zsls')
    .command('remove', 'remove a new zsl', {
        name: {
            describe: 'Name of zsl to remove.',
            demand: true,
            alias: 'r'
        },
    })
    .command('get', 'Read a zsl', {
        name: {
            describe: 'Name of zsl to Read.',
            demand: true,
            alias: 'g'
        },
    })
    .command('geocode', 'Get data about the region user requested.', {
        name: {
            describe: 'Information on a specific region or area.',
            demand: true,
            alias: 'n'
        }
    })
    .help()
    .argv;

const arg1 = yargs.argv._[0];
const arg2 = yargs.argv.name;
const arg3 = yargs.argv.tel;
const arg4 = yargs.argv.supul;

if (arg1 === 'add') {
    json.addZsl(arg2, arg3);
} else if (arg1 === 'remove') {
    const result = json.removeZsl(arg2);
    const message = result ? `${arg2} was not found zsl` : `${arg2} was removed`;
    console.log(message);
} else if (arg1 === 'get') {
    const result = json.getZsl(arg2)[0];
    console.log(`name: ${result.name} tel: ${result.tel}`);
} else if (arg1 === 'getAll') {
    const result = json.getAllZsl();
    result.forEach(item => console.log(`name: ${item.name} tel: ${item.tel}`));
} else if (arg1 === 'geolocation') {
    geolocation.geocode(arg4);
} else {
    console.log(`I don't know what u have input`);
}