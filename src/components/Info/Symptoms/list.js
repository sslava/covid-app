import {t} from '../../../common/locale';

import breath from './icons/breath.png';
import cought from './icons/cought.png';
import lowenergy from './icons/lowenergy.png';
import pain from './icons/pain.png';
import temp from './icons/temp.png';

export default () => [
  {bg: '#FC624D', image: temp, title: t('info.symptoms.list.s1')},
  {bg: '#FC9F4D', image: cought, title: t('info.symptoms.list.s2')},
  {bg: '#4D70FC', image: lowenergy, title: t('info.symptoms.list.s3')},
  {bg: '#FC9F4D', image: breath, title: t('info.symptoms.list.s4')},
  {bg: '#FC624D', image: pain, title: t('info.symptoms.list.s5')},
];
