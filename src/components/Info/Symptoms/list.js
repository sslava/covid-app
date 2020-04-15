import {t} from '../../../common/locale';

import breath from './icons/breath.png';
import cought from './icons/cought.png';
import lowenergy from './icons/lowenergy.png';
import pain from './icons/pain.png';
import temp from './icons/temp.png';

export default () => [
  {bg: '#FF3B30', image: temp, title: t('info.symptoms.list.s1')},
  {bg: '#FF9500', image: cought, title: t('info.symptoms.list.s2')},
  {bg: '#007AFF', image: lowenergy, title: t('info.symptoms.list.s3')},
  {bg: '#FF9500', image: breath, title: t('info.symptoms.list.s4')},
  {bg: '#FF3B30', image: pain, title: t('info.symptoms.list.s5')},
];
