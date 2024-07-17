
import HomePage from '../pages/home.f7';
import VoiceRecorderPage from '../pages/voiceRecorder.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/voiceRecorder/',
    component: VoiceRecorderPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;