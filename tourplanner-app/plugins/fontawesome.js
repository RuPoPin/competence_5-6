import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faMapMarkedAlt,  
  faClipboardList, 
  faUsers,        
  faDownload,      
  faShoePrints,    
  faBookOpen,      
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faMapMarkedAlt,
  faClipboardList,
  faUsers,
  faDownload,
  faShoePrints,
  faBookOpen
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});