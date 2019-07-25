import { expectType } from 'tsd';
import capitalizeFirstLetters = require('.');

expectType<String>(capitalizeFirstLetters('Lorem'));