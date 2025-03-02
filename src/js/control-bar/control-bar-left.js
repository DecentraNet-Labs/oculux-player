/**
 * @file control-bar-left.js
 */
import Component from '../component.js';

// Required children
import './play-toggle.js';
import './time-controls/current-time-display.js';
import './time-controls/duration-display.js';
import './time-controls/time-divider.js';
import './time-controls/remaining-time-display.js';
import './live-display.js';
import './seek-to-live.js';
import './volume-panel.js';
import './skip-buttons/skip-forward.js';
import './skip-buttons/skip-backward.js';
import './audio-track-controls/audio-track-button.js';
import './spacer-controls/custom-control-spacer.js';

/**
 * Container of left-hand controls.
 *
 * @extends Component
 */
class ControlBarLeft extends Component {

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  createEl() {
    return super.createEl('div', {
      className: 'ocx-control-bar-left',
      dir: 'ltr'
    });
  }
}

/**
 * Default options for `ControlBarLeft`
 *
 * @type {Object}
 * @private
 */
ControlBarLeft.prototype.options_ = {
  children: [
    'playToggle',
    'skipBackward',
    'skipForward',
    'volumePanel',
    'currentTimeDisplay',
    'timeDivider',
    'durationDisplay',
    'liveDisplay',
    'seekToLive',
    'remainingTimeDisplay',
    'customControlSpacer',
    'audioTrackButton'
  ]
};

Component.registerComponent('ControlBarLeft', ControlBarLeft);
export default ControlBarLeft;
