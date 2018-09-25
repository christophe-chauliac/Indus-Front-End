import $ from 'jquery';
import 'bootstrap';

import { Clock } from './horloge';

const spanElt = document.querySelector('.horloge');

const horloge = new Clock(spanElt);
horloge.start();

$
('btn-contact').tooltip({
  trigger: 'hover focus'
});
