import HelpingHands from 'assets/services/helping-hands-white.svg';
import HelpingHandsTeal from 'assets/services/helping-hands-teal.svg';
import Wheelchair from 'assets/services/wheelchair-white.svg';
import WheelchairTeal from 'assets/services/wheelchair-teal.svg';
import Medication from 'assets/services/medication-white.svg';
import MedicationTeal from 'assets/services/medication-teal.svg';
import Driving from 'assets/services/driving-white.svg';
import DrivingTeal from 'assets/services/driving-teal.svg';

export default [
  {
    id: 1,
    name: 'Personal Care',
    description: 'Assistance with bathing, personal hygiene, toileting or dressing',
    flatFee: 37,
    src: HelpingHands,
    srcColor: HelpingHandsTeal,
  },
  {
    id: 2,
    name: 'Mobility Assist',
    description: 'Lifting and transfers, including from sit to stand, wheelchair assistance.',
    flatFee: 30,
    src: Wheelchair,
    srcColor: WheelchairTeal,
  },
  {
    id: 3,
    name: 'Medication Reminder',
    description: 'As in person reminder and assistance for scheduled medications.',
    flatFee: 20,
    src: Medication,
    srcColor: MedicationTeal,
  },
  {
    id: 4,
    name: 'Driving Companion',
    description: 'Transportation with a companion for errands, shopping or appointments.',
    flatFee: 35,
    src: Driving,
    srcColor: DrivingTeal,
  },
];
