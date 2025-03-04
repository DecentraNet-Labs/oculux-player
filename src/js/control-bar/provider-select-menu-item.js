/**
 * @file playback-rate-menu-item.js
 */
import MenuItem from '../menu/menu-item.js';
import Component from '../component.js';

/**
 * The specific menu item type for selecting a playback rate.
 *
 * @extends MenuItem
 */
class ProviderSelectMenuItem extends MenuItem {

  /**
   * Creates an instance of this class.
   *
   * @param { import('../../player').default } player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  constructor(player, options) {
    // Modify options for parent MenuItem class's init.
    options.label = options.provider;
    options.selected = options.provider === player.provider;
    options.selectable = true;
    options.multiSelectable = false;

    super(player, options);
    
    this.provider = options.provider;
    this.on(player, 'providerchange', (e) => this.update(e));
  }

  /**
   * This gets called when an `ProviderSelectMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */
  handleClick(event) {
    super.handleClick();
    this.player().provider = this.provider;
    this.player().trigger('providerchange');
  }

  /**
   * Update the ProviderSelectMenuItem when the playbackrate changes.
   *
   * @param {Event} [event]
   *        The `ratechange` event that caused this function to run.
   *
   * @listens Player#ratechange
   */
  update(event) {
    this.selected(this.player().provider === this.provider);
  }

}

/**
 * The text that should display over the `ProviderSelectMenuItem`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
ProviderSelectMenuItem.prototype.contentElType = 'button';

Component.registerComponent('ProviderSelectMenuItem', ProviderSelectMenuItem);
export default ProviderSelectMenuItem;
