# Puppetmastering 2020-03

## Puppetmaster Setup

### CMM Mods

- [Bulk Create Units](https://forums.planetaryannihilation.com/threads/rel-bulk-create-units-2-2-0.62492/) - Pasting a set set number of units, in formations with formation preview
- [Improved Player Control](https://forums.planetaryannihilation.com/threads/rel-improved-player-control-1-5-0-105067.62472/) - provides player-select to Donation Panel, as well as colors sandbox UI by current player, and provides player select hotkeys
- [Chat With Player](https://forums.planetaryannihilation.com/threads/rel-chat-with-player.70434/) - support mod for Puppetmaster mod to notify players of donations

#### Recommended

- [Sandbox Unit Organizer](https://forums.planetaryannihilation.com/threads/rel-sandbox-unit-organizer-1-7-2.62310/) - organized sandbox unit list similar to build bars

### Locally installed mods

- [Donation Panel](https://github.com/JustinLove/donation_panel) - provides the donation feed in-game and sets up player/player/unit/count for pasting
- [Donation Data](https://github.com/JustinLove/donation_data) - suport framework for donation panel
- [Sandbox Unit Menu](https://github.com/JustinLove/sandbox_unit_menu) - buttons for each menu code, data used by other mods

#### Recommended

- [Moved Chat](https://github.com/JustinLove/moved_chat) - moves the ingame chat out of the way of the unit sandbox

#### Optional

- [Lobby Info](https://github.com/JustinLove/lobby_info) - wondible may be using this to capture players and system in case of last minute changes. Requires donation server key setup - discuss as needed.

### Pregame setup

Settings, Gameplay, Donation Data section.

Donation feed can be used to select test feed for practice, such as `donation_config_local`. The event will use `donation_config_live`.

`Feed api key` is not needed by either of these feeds.

Match tags lists all valid match tags. Donations without a valid tag will show up in the feed for possible consideration.

Match tags for 2020 will be `matcha,matchb,matchc,matchd,finals,justgiving` (paste or enter this value)

Match tags for local feeds while testing will probably be `matchred,matchblue,matchyellow,matchgreen,finals,justgiving`

Current match should be set before each game, e.g. `matcha`, `matchb` etc. This will allow donation panel to filter donations to the current game.

You may also want to review mod keybinds, defaults are used below.

### Ingame

(All keybindings show as default, changeable in settings)

Spectators may activate puppetmaster mode with ctrl+shift+alt+p

#### Manual operation

Select player. Default keybinds are ctrl+shift+1..0, I recommend changing these to just 1..0 (or at least 1-4) for the event.

Select number of unit with slider or text entry box at top of unit list.

You can select units from regular sandbox, or the menu at bottom using menu codes.

ctrl+v always does 1 unit.
ctrl+shift+v does the number indicated by Bulk Create Units slider/input box.
alt+v pastes the item queued by the menu codes at bottom.

When Selecting by menu code, the items for that code appear below the unit box. Some codes will have multiple entries, such as umbrella. Each press of alt+v places one of those entires.

#### Donation Panel

Panel can be closed and opened with a options bar icon, uses same icon as game options, at the left of the icon list.

Oldest/first entries are the bottom of the list (this part is guaranteed to stay on screen, new entries may go off the top)

Donations with insufficient funds have a red background. Donations with excess amount have a green background and may need extra attention. Note that while using older test data with current menu, amount mismatches are likely.

Item layout:
  - Top line
    - amount of donation
    - calculated amount of units found in text
    - priority boost - if amount > calculated, these show up first
    - discount level (unlikely to be used, see below)
    - donor name
    - X button - mark that entry as finished or ignored. (Completed donations will be automatically marked as finished.)
  - Tags: recognized features from the donation, including player, planet, match, and menu codes.
  - Donation comment

Click on an entry to queue it for execution. Currently selected donation has cyan background, and code/cost appears at bottom.

If the donation is well formatted, player, planet, unit, and quantity will be selected, but should be quickly checked for accuracy.

Execute as above - typically alt+v to paste from menu queue, though sometimes it is useful to combine or split large orders.

When that code is complete, alt+n will advance to the next code, and mark the current entry as finished when all codes have been nexted past.

Under ideal circumstances, order execution is alt+n to select a code, and one or more alt+v to place them.

The feed will automatically update with new entries. You can also use alt+u to force and update. alt+u will also clear finished entries from the list. Donations for other matches may be present at startup, marked as finished. press alt+u to clear.

### Discounts (optional section)

After some long matches one year, a discount system was implemented to help finish games. It was not used in the most recent event, but the sample data feed does have some test cases that you may run into while testing, which may cause results unexpected by the normal menu.

If discounts are put into place, they should be tagged at the server and included in the feed. Discount level is the 4th number in the donation header.

For local information and other feeds the menu codes list has two buttons (the last two) for controlling discount level for display. The first button shows the current level, and functions as an increment. The second button shows '-' and decreases the level.

## Game Host Setup

### CMM Mods

- [Puppetmaster](https://forums.planetaryannihilation.com/threads/rel-server-puppetmaster-3-3-0.62534/)
- [Legion Expansion](https://forums.planetaryannihilation.com/threads/rel-legion-expansion-released.71680/)
- [WPMarshall's Map Pack](https://forums.planetaryannihilation.com/threads/wpmarshalls-map-pack-update-12-01-19.71597/)

### Locally installed mods

- [Hermes Orbital Spawn](https://github.com/JustinLove/hermes_orbital_spawn) - fixes spawn layer so that probe will enter play in the orbital layer if pasted with orbital shell visible
- [One Shot Nuke](https://github.com/JustinLove/one_shot_nukes) - adds unit specs for debug paste (not on build bar)

### Lobby Setup

- Event will use dedicated servers
- Lobby titles like "Ablegamers match A - Red"
- Private, password TBD
- Free for All
- Sandbox must be enabled
- Systems TBD - WPMarshall map pack
  - Finals: Final Destination
- At least 4 spectators (2 casters, 2 puppetmasters)

## Installing mods locally

Find your [data directory](https://wiki.palobby.com/wiki/Planetary_Annihilation_Data_Directory)

Server mods go in `sever_mods` directory, client mods go in `client_mods` (may be `mods` on older setups)

Each mod should have it's own folder, that folder will have the modinfo

`server_mods/hermes_orbital/modinfo.json`

Once the files are in place, you should be able to open PA and find them in the CMM browser.

(If you need to use a local version of a mod published in CMM, you will need to change the `identifier` in the modinfo.json.)  [General mod info](https://wiki.palobby.com/wiki/Creating_Your_First_Planetary_Annihilation_Mod)
