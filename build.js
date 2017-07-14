const fs = require('fs');

const template = fs.readFileSync('readme.md').toString();
const enumeratedTypes = require('.');

const keys = Object.keys(enumeratedTypes);

let table = `### ${keys.length} Available Enumerated Types:\n\n`;
table += '| Key | Values |\n';
table += '| :------ | :------ |\n';

keys.forEach(key => {
	if (key === 'list') {
		return;
	}

	table += `| \`${key}\` | \`${enumeratedTypes[key].toString().replace(/,/g, ', ')}\` |\n`;
});

const inject = /<!-- START TABLE -->(\w|\W)*<!-- END TABLE -->/gim;
const updated = template.replace(inject, `<!-- START TABLE -->\n${table}\n<!-- END TABLE -->`);
fs.writeFileSync('readme.md', updated);
