import Activity from 'assets/services/Activity.svg';
import Cleaning from 'assets/services/Cleaning.svg';
import Companionship from 'assets/services/Companionship.svg';
import Cooking from 'assets/services/Cooking.svg';
import DriverCompanion from 'assets/services/DriverCompanion.svg';
import Grooming from 'assets/services/Grooming.svg';
import HelpingAndMobility from 'assets/services/HelpingAndMobility.svg';
import Hygiene from 'assets/services/Hygiene.svg';

export default [
  {
    id: 1,
    name: 'Personal Care',
    description: 'Assistance with bathing, personal hygiene, toileting or dressing',
    flatFee: 59.99,
    src: DriverCompanion,
  },
  {
    id: 2,
    name: 'Mobility Assist',
    description: 'Lifting and transfers, including from sit to stand, wheelchair assistance.',
    flatFee: 35.0,
    src: DriverCompanion,
  },
  {
    id: 3,
    name: 'Medication Reminder',
    description: 'As in person reminder and assistance for scheduled medications.',
    flatFee: 20.0,
    src: DriverCompanion,
  },
  {
    id: 4,
    name: 'Driving Companion',
    description: 'Transportation with a companion for errands, shopping or appointments.',
    flatFee: 74.99,
    src: DriverCompanion,
  },
];
