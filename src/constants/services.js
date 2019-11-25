import HelpingHands from 'assets/services/helping-hands-white.svg';
import Wheelchair from 'assets/services/wheelchair-white.svg';
import Medication from 'assets/services/medication-white.svg';
import Driving from 'assets/services/driving-white.svg';

export default [
  {
    id: 1,
    name: 'Personal Care',
    description: 'Assistance with bathing, personal hygiene, toileting or dressing',
    flatFee: 37,
    src: HelpingHands,
  },
  {
    id: 2,
    name: 'Mobility Assist',
    description: 'Lifting and transfers, including from sit to stand, wheelchair assistance.',
    flatFee: 30,
    src: Wheelchair,
  },
  {
    id: 3,
    name: 'Medication Reminder',
    description: 'As in person reminder and assistance for scheduled medications.',
    flatFee: 20,
    src: Medication,
  },
  {
    id: 4,
    name: 'Driving Companion',
    description: 'Transportation with a companion for errands, shopping or appointments.',
    flatFee: 35,
    src: Driving,
  },
];
