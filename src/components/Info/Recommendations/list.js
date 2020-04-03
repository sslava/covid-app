import alone from './icons/alone.png';
import calm from './icons/calm.png';
import distance from './icons/distance.png';
import home from './icons/home.png';
import mask from './icons/mask.png';
import talk from './icons/talk.png';
import wash from './icons/wash.png';

export default (t) => [
  {
    icon: home,
    title: t('info.recommentations.list.home.title'),
    desc: t('info.recommentations.list.home.desc'),
  },
  {
    icon: alone,
    title: t('info.recommentations.list.alone.title'),
    desc: t('info.recommentations.list.alone.desc'),
  },
  {
    icon: distance,
    title: t('info.recommentations.list.distance.title'),
    desc: t('info.recommentations.list.distance.desc'),
  },
  {
    icon: wash,
    title: t('info.recommentations.list.wash.title'),
    desc: t('info.recommentations.list.wash.desc'),
  },
  {
    icon: mask,
    title: t('info.recommentations.list.mask.title'),
    desc: t('info.recommentations.list.mask.desc'),
  },
  {
    icon: calm,
    title: t('info.recommentations.list.calm.title'),
    desc: t('info.recommentations.list.calm.desc'),
  },
  {
    icon: talk,
    title: t('info.recommentations.list.talk.title'),
    desc: t('info.recommentations.list.talk.desc'),
  },
];
