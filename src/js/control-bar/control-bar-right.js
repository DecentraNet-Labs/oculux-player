/**
 * @file control-bar-right.js
 */
import Component from '../component.js';

// Required children
import './provider-select.js';
import './picture-in-picture-toggle.js';
import './fullscreen-toggle.js';
import './text-track-controls/chapters-button.js';
import './text-track-controls/descriptions-button.js';
import './text-track-controls/subtitles-button.js';
import './text-track-controls/captions-button.js';
import './text-track-controls/subs-caps-button.js';
import './playback-rate-menu/playback-rate-menu-button.js';
import './spacer-controls/custom-control-spacer.js';

/**
 * Container of right-hand controls.
 *
 * @extends Component
 */
class ControlBarRight extends Component {

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  createEl() {
    return super.createEl('div', {
      className: 'ocx-control-bar-right',
      dir: 'ltr'
    });
  }
}

/**
 * Default options for `ControlBarRight`
 *
 * @type {Object}
 * @private
 */
ControlBarRight.prototype.options_ = {
  children: [
    'providerSelect',
    'customControlSpacer',
    'playbackRateMenuButton',
    'chaptersButton',
    'descriptionsButton',
    'subsCapsButton',
    'pictureInPictureToggle',
    'fullscreenToggle'
  ]
};

Component.registerComponent('ControlBarRight', ControlBarRight);
export default ControlBarRight;
