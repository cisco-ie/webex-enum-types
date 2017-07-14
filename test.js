import test from 'ava';
import ENUMS from '.';

test('List keys', t => {
	const keys = ENUMS.list();
	t.deepEqual(keys, ['addressType', 'entryExitTone', 'joinStatus', 'listStatus', 'personType', 'registrationStatus', 'role']);
});
